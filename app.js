const fs = require('fs');

const readableStream = fs.createReadStream('hello.txt');

const writeableStream = fs.createWriteStream('some.txt');

readableStream.on('data', function (chunk) {
  writeableStream.write(chunk);
});
