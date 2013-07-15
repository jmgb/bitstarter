#!/usr/bin/env node

var express = require("express");

var app = express.createServer(express.logger());

var buffer = new Buffer("Texto del buffer!", "utf-8");

fs = require('fs');

fs.readFile('index.html', function (err, data) { 
if (err){return console.log(err);}
buffer=data;
//console.log(data + "leido con exito"); 
});

app.get('/', function(request, response) {
  response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
