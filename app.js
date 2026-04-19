const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use('/contact', function (_, response) {
  response.render('contact.hbs', {
    title: 'My contact dock',
    emailVisible: true,
    emails: 'ololo@ya.ru',
    phone: '+1212',
  });
});

app.use('/', function (_, response) {
  response.render('home.hbs');
});

app.listen(3000, function () {
  console.log('Example app listening on port http://localhost:3000');
});
