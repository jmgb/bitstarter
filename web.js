var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World 2!');
});


//var buffer = new Buffer("I'm a string!", "utf-8"); 

//buffer = fs.readFile('index.html', function (err, data) { if (err) throw err; console.log(data);  console.log("leido con exito"); }); 

//console.log(buffer.toString('utf-8');


app.get('/', function(request, response) {
  response.send("hola");
});



var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
