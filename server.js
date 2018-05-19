var express = require('express');
var path = require('path');

//  app.listen(8080);
const SERVER_PORT = 8080;

var app = express();
app.use(express.static('public'));
app.use(express.static('files'));
app.use(express.static('node_modules'));


// app.get('/', function (request, response) {
//    response.send("Hey, hello from the server!");
// });

app.get('/', function (request, response) {
   //response.send("Hey, hello from the server!");
   response.sendFile(path.join(public + '/me.html'));
});



app.listen(SERVER_PORT, () => {
   console.log("Server started on port " + SERVER_PORT);
});