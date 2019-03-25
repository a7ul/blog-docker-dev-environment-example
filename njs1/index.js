const http = require("http");

const hostname = "127.0.0.1";
const port = process.env.PORT;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello from NJS1");
});

server.listen(port, hostname, () => {
  console.log(`NJS1 running at http://${hostname}:${port}/`);
});
