const http = require("http");

const server = http.createServer();
server.on("request", (req, res) => {
  res.end("Hello world yo");
  console.log("event request");
});
server.listen(5050);
