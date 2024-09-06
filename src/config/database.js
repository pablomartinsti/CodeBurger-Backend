require('dotenv').config();

console.log('DATABASE_URL:', process.env.DATABASE_URL); // Verificar se a variável está sendo carregada corretamente

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true, // Neon exige SSL
      rejectUnauthorized: false, // Para evitar problemas com certificados SSL
    },
  },
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
});

module.exports = sequelize;
