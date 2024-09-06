import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer.js'; // Configuração ajustada para Cloudinary
import UserController from './app/controllers/UserController.js';
import SessionController from './app/controllers/SessionController.js';
import ProductController from './app/controllers/ProductController.js';
import CategoryController from './app/controllers/CategoryController.js';
import OrderController from './app/controllers/OrderController.js';
import authMiddleware from './app/middlewares/auth.js';

const routes = new Router();
const upload = multer(multerConfig); // Agora o upload usa Cloudinary

// Rota para a raiz "/"
routes.get('/', (req, res) => {
  res.send('API is running...');
});

// Rota para criação de usuários e sessões
routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

// Rotas públicas para visualização de produtos, categorias e pedidos
routes.get('/products', ProductController.index);
routes.get('/categories', CategoryController.index);
routes.get('/orders', OrderController.index);

// Middleware de autenticação para as rotas protegidas
routes.use(authMiddleware);

// Upload de imagens para produtos usando Cloudinary
routes.post('/products', upload.single('file'), ProductController.store);
routes.put('/products/:id', upload.single('file'), ProductController.update);

// Upload de imagens para categorias usando Cloudinary
routes.post('/categories', upload.single('file'), CategoryController.store);
routes.put('/categories/:id', upload.single('file'), CategoryController.update);

// Rotas para pedidos (não precisam de upload de imagens)
routes.post('/orders', OrderController.store);
routes.put('/orders/:id', OrderController.update);

export default routes;
