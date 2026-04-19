const express = require('express');
const fs = require('fs');

const app = express();

app.use(function (request, response, next) {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  const data = `${hour}:${minute}:${second} - ${request.method} ${request.url} ${request.get('user-agent')}`;
  console.log(data);

  fs.appendFile('serer.log', data + '/n', function (error) {
    if (error) return console.log(error);
    console.log('write done');
  });

  next();
});

app.get('/', function (_, response) {
  response.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port http://localhost:3000');
});
