const WebSocket = require('wss');

// Define the port and WebSocket server URL
const port = process.env.PORT || 8080;
const websocketUrl = `http://networking-1etg.vercel.app`; // Your deployed WebSocket server URL

const wss = new WebSocket.Server({ port });

wss.on('connection', (ws, req) => {
  console.log('New WebSocket client connected to', websocketUrl);

  ws.on('message', (message) => {
    console.log(`Received message => ${message}`);

    // Broadcast the message to all clients except the sender
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
        console.log(`Sent message to client: ${client._socket.remoteAddress}`);
      }
    });
  });

  ws.on('close', () => {
    console.log('WebSocket client disconnected');
  });
});

console.log(`WebSocket server running on ${websocketUrl} and port ${port}`);
