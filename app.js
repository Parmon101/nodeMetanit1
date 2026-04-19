const express = require('express');

const app = express();

app.set('view engine', 'hbs');

app.use('/contact', function (_, response) {
  response.render('contact.hbs', {
    title: 'My contact dock',
    emailVisible: true,
    emails: ['ololo@ya.ru', 'sssss@ds.ds'],
    phone: '+1212',
  });
});
app.use('/', function (_, response) {
  response.send('main page');
});

app.listen(3000, function () {
  console.log('Example app listening on port http://localhost:3000');
});
