const http = require('http');
const WebSocket = require('ws');

// Define the port and WebSocket server URL
const port = process.env.PORT || 8080;
const server = http.createServer();

// Create WebSocket server using the HTTP server
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws, req) => {
  console.log('New WebSocket client connected');

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

// Start the HTTP server and WebSocket server together
server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
