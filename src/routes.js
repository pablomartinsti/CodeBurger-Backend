import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer.js';
import UserController from './app/controllers/UserController.js';
import SessionController from './app/controllers/SessionController.js';
import ProductController from './app/controllers/ProductController.js';
import CategoryController from './app/controllers/CategoryController.js';
import OrderController from './app/controllers/OrderController.js';
import authMiddleware from './app/middlewares/auth.js';

const routes = new Router();

const upload = multer(multerConfig);

// Rota para a raiz "/"
routes.get('/', (req, res) => {
  res.send('API is running...');
});

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);
routes.get('/products', ProductController.index);
routes.get('/categories', CategoryController.index);
routes.get('/orders', OrderController.index);

routes.use(authMiddleware);
routes.post('/products', upload.single('file'), ProductController.store);
routes.put('/products/:id', upload.single('file'), ProductController.update);

routes.post('/categories', upload.single('file'), CategoryController.store);
routes.put('/categories/:id', upload.single('file'), CategoryController.update);

routes.post('/orders', OrderController.store);
routes.put('/orders/:id', OrderController.update);

export default routes;
