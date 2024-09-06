import 'dotenv/config'; // Carrega as variáveis de ambiente do arquivo .env
import app from './app.js'; // Certifique-se de adicionar a extensão .js

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
