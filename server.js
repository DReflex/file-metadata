// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var multer  = require('multer');
var upload = multer();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/upload",upload.single('html'), function (request, response) {
   
   
  var JSON = { 
    size: request.file.size
  };
  response.status(200).json(JSON);
    
  });
 


app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Please upload file before submitting!')
})
app.use(function ( req, res, next) {
  
  res.status(404).send('Page not found!')
})


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
