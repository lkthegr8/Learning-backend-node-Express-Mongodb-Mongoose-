const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello world yo");
  console.log("event request");
});

server.listen(5050, () => {
  console.log("listening at port 5050");
});
