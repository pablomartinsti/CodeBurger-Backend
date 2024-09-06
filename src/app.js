import express from 'express';
import routes from './routes.js';
import cors from 'cors';
import './database/index.js';

class App {
  constructor() {
    this.app = express();
    this.app.use(cors());

    this.middlewares();
    this.routes();
  }

  middlewares() {
    // Middleware para aceitar JSON nas requisições
    this.app.use(express.json());

    // Se futuramente precisar servir arquivos estáticos, pode adicionar aqui
    // Atualmente, não precisamos servir uploads locais com o Cloudinary
  }

  routes() {
    this.app.use(routes); // Definindo as rotas
  }
}

export default new App().app;
