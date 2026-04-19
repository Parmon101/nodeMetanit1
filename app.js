const http = require('http');
const fs = require('fs');

http
  .createServer(function (request, response) {
    console.log(`Запрошенный адрес: ${request.url}`);

    const filePath = request.url.substring(1);

    // fs.access(filePath, fs.constants.R_OK, (err) => {
    //   if (err) {
    //     response.statusCode = 404;
    //     response.end('resource not found');
    //   } else {
    //     fs.createReadStream(filePath).pipe(response);
    //   }
    // });

    fs.readFile(filePath, function (error, data) {
      if (error) {
        response.statusCode = 404;
        response.end('resource not found');
      } else {
        response.end(data);
      }
    });
  })
  .listen(3000, function () {
    console.log('Server running at http://127.0.0.1:3000/index.html');
  });
