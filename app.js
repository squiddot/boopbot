var tmi = require("tmi.js");

var options = {
  options: {
    debug: true
  },
  connection: {
    cluster: "aws",
    reconnect: true
  },
  identity: {
    username: "bestboiboop",
    password: "oauth:wqxszmezhqttq5pe7offc1pzy4dbqy"
  },
  channels: ["shesquid"]
};

var client = new tmi.client(options);
client.connect();

client.on("connected", function(address, port) {
  client.action("shesquid", "I'm connected! Hello shesquidchat!");
});
