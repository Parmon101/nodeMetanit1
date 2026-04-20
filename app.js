const express = require('express');
const app = express();

const users = [
  {
    id: '1',
    name: 'John',
    age: 30,
  },
];

app.use(express.json());
app.use(express.static('public'));

app.get('/api/users', async (_, response) => response.send(users));

app.get('/api/users/:id', async (request, response) => {
  const id = request.params.id;
  const user = users.find((user) => user.id === id);
  if (user) express.response.send(user);
  else response.sendStatus(404);
});

app.post('/api/users', async (request, response) => {
  if (!request.body) return response.sendStatus(400);

  const userName = request.body.name;
  const userAge = request.body.age;
  const user = {
    id: crypto.randomUUID(),
    name: userName,
    age: userAge,
  };

  users.push(user);
  response.send(user);
  response.sendStatus(201).send('ok');
});

app.delete('/api/users/:id', async (request, response) => {
  const id = request.params.id;

  let index = users.findIndex((user) => user.id === id);
  if (index > -1) {
    const user = users.splice(index, 1)[0];
    response.send(user);
  } else {
    response.status(404).send('User not found');
  }
});

app.put('/api/users', async (request, response) => {
  if (!request.body) return response.sendStatus(400);

  const id = request.body.id;
  const userName = request.body.name;
  const userAge = request.body.age;

  const index = users.findIndex((user) => user.id === id);
  if (index > -1) {
    const user = users[index];
    user.age = userAge;
    user.name = userName;
    response.send(user);
  } else {
    response.status(404).send('User not found');
  }
});

app.listen(3000, function () {
  console.log('Example app listening on port http://localhost:3000');
});
