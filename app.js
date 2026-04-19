const express = require('express');

const app = express();

app.use('/static', express.static('public'));

app.use('/', function (_, response) {
  response.send('<h1>main pa</h1>');
});

app.listen(3000, function () {
  console.log('Example app listening on port http://localhost:3000/about');
});
