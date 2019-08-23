const mongoose = require('mongoose');

mongoose.connect("mongodb://192.168.99.100:27017/upload", {
  useNewUrlParser: true,
});