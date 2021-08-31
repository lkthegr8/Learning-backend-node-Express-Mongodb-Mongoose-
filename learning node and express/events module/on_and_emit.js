const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// on and emmit functions

// response is the name of the event
customEmitter.on("response", () => {
  console.log("data received");
});
customEmitter.on("response", () => {
  console.log("data paid");
});

// event called
customEmitter.emit("response");
