const express = require('express');

const app = express();

app.get('/', function (request, response) {
  response.send('<h1>Express from GitHub</h1>');
});
app.get('/about', function (request, response) {
  response.send('<h1>About</h1>');
});
app.get('/contact', function (request, response) {
  response.send('<h1>Contact</h1>');
});

app.listen(3000, function () {
  console.log('Example app listening on port http://localhost:3000');
});
