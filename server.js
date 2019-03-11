var express = require('express');
var bodyParser = require('body-parser');
var modelUrl = require('./models/url.js');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://admin:admin1@ds349045.mlab.com:49045/bitly');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/post',function(req,res){
  var newUrl = new modelUrl();
  newUrl.url = req.body.url;
  console.log(newUrl.url);
  newUrl.save(function(err,savedObject){
      if(savedObject)
      {
        res.send(savedObject);
      }
      else {
        res.send(err);
      }
});
});

app.listen(4000,function(){
  console.log("server is listening on port 4000...");
})