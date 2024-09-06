import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { extname } from 'node:path';
import cloudinary from './cloudinaryConfig.js'; // Importar a configuração do Cloudinary
import { CloudinaryStorage } from 'multer-storage-cloudinary'; // Importar o storage para Cloudinary

// Configurar o armazenamento no Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary, // A configuração do Cloudinary importada
  params: {
    folder: 'uploads', // Pasta onde as imagens serão armazenadas no Cloudinary
    format: async (req, file) => extname(file.originalname).replace('.', ''), // Formato da imagem
    public_id: (req, file) => uuidv4() + extname(file.originalname), // Nome único para o arquivo
  },
});

const upload = multer({ storage });

export default upload;
