const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to home page");
  } else if (req.url === "/about") {
    //   blocking code
    // while (true) {}//if any users access about then all other users get blocked
    res.end("welcome to about us");
  } else {
    res.end(
      `<h1>Oops!</h1><p> we cant seem to find the page you are looking for</p><a href="/">click here</a>`
    );
  }
});

server.listen(5050);
