const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {
  dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
  storage: multer.diskStorage({
    destination: (request, file, callback) => {
      callback(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),)
    },
    filename: (request, file, callback) => {
      crypto.randomBytes(16, (error, hash) => {
        if (error) callback(error);

        const filename = `${hash.toString('hex')}-${file.originalname}`;

        callback(null, filename);
      });
    }
  }),
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