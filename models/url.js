var mongoose = require('mongoose');

var urlSchema = mongoose.Schema({
  url : String,
});

var urlModel = mongoose.model('urlmodel' , urlSchema);

module.exports = urlModel;
