const http = require('http');

const server = http.createServer((req, res) => {
  // This is where the bug lies.  The response is sent, but the connection remains open
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});