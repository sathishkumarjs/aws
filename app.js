var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});

app.get('/stocks',(req, res)=>{
   res.send({
      "quote" : "APPLE",
      "quote" : "MICROSOFT",
      "quote" : 'TESLA"
   }
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
