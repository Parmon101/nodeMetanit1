const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.use('/contact', function (request, response) {
  response.render('contact', {
    title: 'Contact page',
    emailVisible: true,
    emails: ['qG2qB@example.com', 'z9g5V@example.com'],
    phone: '123-456-7890',
  });
});
app.use('/', function (request, response) {
  response.send('main');
});

app.listen(3000, function () {
  console.log('Example app listening on port http://localhost:3000');
});
