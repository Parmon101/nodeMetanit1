const express = require('express');

const app = express();

app.use('/home/foo/bar', function (_, response) {
  response.status(402).send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port http://localhost:3000');
});
