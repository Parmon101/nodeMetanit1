const http = require('http');

http
  .createServer(function (request, response) {
    response.setHeader('Content-Type', 'text/html; charset=utf-8');

    if (request.url === '/') {
      response.statusCode = 302;
      response.setHeader('Location', '/newpage');
    } else if (request.url === '/newpage') {
      response.write('<h1>Привет мир!</h1>');
    } else {
      response.statusCode = 404;
      response.write('<h1>404</h1>');
    }

    response.end();
  })
  .listen(3000, function () {
    console.log('Server running at http://127.0.0.1:3000/');
  });
