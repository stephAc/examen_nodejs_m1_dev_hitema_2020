const WebSocket = require('ws');
const webSocketServer = new WebSocket.Server({ port: 3003 });
let discussion = [];

webSocketServer.on('connection', (webSocket) => {
  webSocket.send(JSON.stringify(discussion));
  webSocket.onmessage = (messageEvent) => {
    const message = messageEvent.data;
    discussion.push(message);
    webSocketServer.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  };
});

module.exports = webSocketServer;
