import { v2 as cloudinary } from 'cloudinary';

// O Cloudinary usará automaticamente a variável CLOUDINARY_URL do .env
cloudinary.config();

export default cloudinary;
