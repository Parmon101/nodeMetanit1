const express = require('express');
const expressHbs = require('express-handlebars');
const hbs = require('hbs');
const app = express();

app.engine(
  'hbs',
  expressHbs.engine({
    layoutsDir: 'views/layouts',
    defaultLayout: 'layout',
    extname: 'hbs',
  }),
);
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use('/contact', function (_, response) {
  response.render('contact', {
    title: 'Contact page',
    email: 'n1n1n1@n1n1',
    phone: '123-123-123',
  });
});

app.use('/', function (_, response) {
  response.render('home.hbs');
});

app.listen(3000, function () {
  console.log('Example app listening on port http://localhost:3000');
});
