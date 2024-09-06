import * as Yup from 'yup';
import Product from '../models/Product.js';
import Category from '../models/Category.js';
import User from '../models/User.js';

class ProductController {
  async store(request, response) {
    const schema = Yup.object({
      name: Yup.string().required(),
      price: Yup.number().required(),
      category_id: Yup.number().required(),
      offer: Yup.boolean(),
    });

    try {
      schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    const { admin: isAdmin } = await User.findByPk(request.userId);

    if (!isAdmin) {
      return response.status(401).json();
    }

    // Aqui pegamos a URL da imagem retornada pelo Cloudinary
    const { path: imageUrl } = request.file;
    const { name, price, category_id, offer } = request.body;

    const product = await Product.create({
      name,
      price,
      category_id,
      path: imageUrl, // Agora armazenamos a URL da imagem
      offer,
    });

    return response.status(201).json(product);
  }

  async update(request, response) {
    const schema = Yup.object({
      name: Yup.string(),
      price: Yup.number(),
      category_id: Yup.number(),
      offer: Yup.boolean(),
    });

    try {
      schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    const { admin: isAdmin } = await User.findByPk(request.userId);

    if (!isAdmin) {
      return response.status(401).json();
    }

    const { id } = request.params;

    const findProduct = await Product.findByPk(id);

    if (!findProduct) {
      return response
        .status(400)
        .json({ error: 'make sure your product ID is correct' });
    }

    let imageUrl = findProduct.path; // Mantém o path original caso nenhuma nova imagem seja enviada
    if (request.file) {
      imageUrl = request.file.path; // Atualiza o path se uma nova imagem for enviada
    }

    const { name, price, category_id, offer } = request.body;

    await Product.update(
      {
        name,
        price,
        category_id,
        path: imageUrl, // Atualiza com a URL da nova imagem, se houver
        offer,
      },
      {
        where: {
          id,
        },
      },
    );

    return response.status(200).json();
  }

  async index(request, response) {
    const products = await Product.findAll({
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name'],
        },
      ],
    });

    return response.json(products);
  }
}

export default new ProductController();
