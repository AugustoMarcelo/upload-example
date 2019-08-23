const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');

const storageTypes = {
  local: multer.diskStorage({
    destination: (request, file, callback) => {
      callback(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),)
    },
    filename: (request, file, callback) => {
      crypto.randomBytes(16, (error, hash) => {
        if (error) callback(error);

        file.key = `${hash.toString('hex')}-${file.originalname}`;

        callback(null, file.key);
      });
    }
  }),
  s3: multerS3({
    s3: new aws.S3(),
    // Nome do bucket criado na aws
    bucket: process.env.AWS_BUCKET_NAME,
    // Força o navegador a abrir o arquivo com o content-type da imagem. Por padrão, ele faria o download
    contentType: multerS3.AUTO_CONTENT_TYPE,
    // Permite que os uploads feitos possam ser lidos por qualquer usuário
    acl: 'public-read',
    key: (request, file, callback) => {
      crypto.randomBytes(16, (error, hash) => {
        if (error) callback(error);

        const filename = `${hash.toString('hex')}-${file.originalname}`;

        callback(null, filename);
      });
    }
  }),
};

module.exports = {
  dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
  storage: storageTypes[process.env.STORAGE_TYPE],
  // Será permitido upload de imagens com no máximo 2MB
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  // Tipos de imagens cujo upload será permitido
  fileFilter: (request, file, callback) => {
    const allowedMimes = [
      'image/jpeg',
      'image/pjpeg',
      'image/png',
      'image/gif',
    ]
    
    if (allowedMimes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new Error('Invalid file type'));
    }
  },
};