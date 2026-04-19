const express = require('express');

const app = express();

app.use('/home/bar', function (_, response) {
  response.redirect('about');
});
app.use('/about', function (_, response) {
  response.send('<h1>About</h1>');
});

app.listen(3000, function () {
  console.log('Example app listening on port http://localhost:3000');
});
