const express = require('express');

const app = express();

const urlencodedParser = express.urlencoded({ extended: false });

app.get('/products/:productId/productName/:nameId', function (request, response) {
  const pId = request.params.productId;
  const pnId = request.params.nameId;

  response.send(`Product ID: ${pId}, Product Name: ${pnId}`);
});

app.listen(3000, function () {
  console.log('Example app listening on port http://localhost:3000');
});
