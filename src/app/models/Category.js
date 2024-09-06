import Sequelize, { Model } from 'sequelize';

class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING, // O campo path agora armazena a URL completa do Cloudinary
      },
      {
        sequelize,
      },
    );

    return this;
  }
}

export default Category;
