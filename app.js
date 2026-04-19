const http = require('http');
const fs = require('fs');

http
  .createServer(async (request, response) => {
    if (request.url === '/user') {
      const buffers = [];

      for await (const chunk of request) {
        buffers.push(chunk);
      }

      const user = JSON.parse(Buffer.concat(buffers).toString());
      console.log(user.name, '-', user?.age);
      // const data = Buffer.concat(buffers).toString();
      // console.log(data);

      response.end('data success');
    } else {
      fs.readFile('./index.html', function (err, data) {
        response.end(data);
      });
    }
  })
  .listen(3000, function () {
    console.log('Server running at http://127.0.0.1:3000/');
  });
