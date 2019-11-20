require('babel-register')({
presets: ['react']

});


var express = require ('express'); //importing

var app= express(); //

var React = require ('react');

var Component = require('./Component.jsx');  //comp


var ReactDOMServer = require('react-dom/server'); //rendering comp on server 

app.use(express.static('public')); // assets folder generaTING bundle.js
app.get('/', function(request, response)   { //function will be executed when the path is /
var html = ReactDOMServer.renderToString( //render html string 
React.createElement(Component) // // this will be converted to html string
);
response.send(html); //html string will sent to client

});

var PORT =3000; //mentioning the port 
app.listen(PORT, function() { //listen() method on application object to specify the port number on which the application listens for requests. 
  console.log('http://localhost' +PORT);
});

