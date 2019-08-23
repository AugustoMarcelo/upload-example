require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');

require('./config/database');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
// Rota que provê acesso aos uploads locais, através da url /files/:filename
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')));

app.use(require('./routes'));

app.listen(3000);
