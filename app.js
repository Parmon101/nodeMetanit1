const http = require('http');
const fs = require('fs');

http
  .createServer(function (request, response) {
    fs.readFile('index.html', function (error, data) {
      if (error) {
        response.statusCode = 500;
        response.end();
      } else {
        const message = 'lear node';
        const header = 'main';
        const dataText = data
          .toString()
          .replace(/{header}/g, header)
          .replace(/{message}/g, message);
        response.end(dataText);
      }
    });
  })
  .listen(3000, function () {
    console.log('Server running at http://127.0.0.1:3000/index.html');
  });
