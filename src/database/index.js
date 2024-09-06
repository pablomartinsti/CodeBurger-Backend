import Sequelize from 'sequelize';
import mongoose from 'mongoose';

// Modelos importados
import User from '../app/models/User';
import Product from '../app/models/Product';
import Category from '../app/models/Category';

const models = [User, Product, Category];

class Database {
  constructor() {
    this.init(); // Inicia a conexão com o PostgreSQL
    this.mongo(); // Inicia a conexão com o MongoDB
  }

  init() {
    // Inicializa o Sequelize usando a variável DATABASE_URL do .env
    this.connection = new Sequelize(process.env.DATABASE_URL, {
      dialect: 'postgres',
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false, // SSL auto-assinado para Neon
        },
      },
      logging: false, // Desativa os logs de SQL no console
    });

    // Inicializa e associa os modelos
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      );
  }

  mongo() {
    // Usar a string de conexão do MongoDB Atlas definida no arquivo .env
    this.mongoConnection = mongoose
      .connect(process.env.MONGO_URL) // Carrega a string de conexão do MongoDB a partir do .env
      .then(() => console.log('Conectado ao MongoDB Atlas com sucesso!'))
      .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));
  }
}

export default new Database();
