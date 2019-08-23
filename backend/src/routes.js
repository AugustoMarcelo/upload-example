const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

const Post = require('./models/Post');

routes.post('/posts', multer(multerConfig).single('file'), async (request, response) => {
  const { originalname: name, size, key, location: url = '' } = request.file;

  const post = await Post.create({
    name,
    size,
    key,
    url,
  });

  response.json(post);
});

module.exports = routes;