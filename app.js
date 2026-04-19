const express = require('express');

const app = express();

app.get('/', function (_, response) {
  response.send('<h1>main page</h1>');
});

app.use('/about', function (request, response) {
  // 1
  //   const id = request.query.id;
  //   const userName = request.query.name;
  //   response.send(`<h1>about page</h1>
  // <p>id: ${id}</p>
  // <p>name: ${userName}</p>`);
  // 2
  // const users = request.query.name;
  // let responseText = '<ul>';
  // for (username of users) {
  //   responseText += `<li>${username}</li>`;
  // }
  // responseText += '</ul>';
  // response.send(responseText);
});

app.listen(3000, function () {
  console.log('Example app listening on port http://localhost:3000');
});
