var cool = require('cool-asci-faces');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');


var port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client')));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name');
  next();
});


app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, './client', 'index.html'));
});

app.get('/cool', function(request, response) {
  response.send(cool());
});

app.listen(port);

console.log('Port: ' + port + " is where the magic happens");

module.exports = app;