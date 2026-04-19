const express = require('express');

const app = express();

// const jsoneParse = express.json();
app.use(express.json());

app.post('/user', function (request, response) {
  const user = request.body;
  console.log(user);
  if (!user) return response.sendStatus(400);
  const responseText = `Name: ${user.name}, Age: ${user.age}`;
  response.send({ message: responseText });
});

app.get('/', function (request, response) {
  response.sendFile(__dirname + '/index.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port http://localhost:3000');
});
