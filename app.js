const express = require('express');

const app = express();

const productRouter = express.Router();

productRouter.use('/create', function (request, response) {
  response.send('create product');
});

productRouter.use('/:id', function (request, response) {
  response.send(`product ${request.params.id}`);
});

productRouter.use('/', function (request, response) {
  response.send('products list');
});

app.use('/products', productRouter);

app.use('/about', function (_, response) {
  response.send('about page');
});

app.use('/', function (request, response) {
  response.send('main page');
});

app.listen(3000, function () {
  console.log('Example app listening on port http://localhost:3000');
});
