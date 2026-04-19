const http = require('http');
const fs = require('fs');

http
  .createServer(async (request, response) => {
    if (request.url == '/user') {
      let body = '';

      for await (const chunk of request) {
        body += chunk;
      }

      let userName = '';
      let userAge = 0;
      console.log('body', body);
      const params = body.split('&');
      console.log('params', params);

      for (const param of params) {
        console.log(param);
        const [paramName, paramValue] = param.split('=');
        if (paramName === 'username') userName = paramValue;
        if (paramName === 'userage') userAge = paramValue;
      }

      response.end(`You name: ${userName}, age: ${userAge}`);
    } else {
      fs.readFile('index.html', (_, data) => response.end(data));
    }
  })
  .listen(3000, function () {
    console.log('Server running at http://127.0.0.1:3000/');
  });
