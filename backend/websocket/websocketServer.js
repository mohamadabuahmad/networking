const http = require('http');
const WebSocket = require('ws');

// Create an HTTP server and integrate with WebSocket server
const server = http.createServer();
const wss = new WebSocket.Server({ noServer: true });

// Handle WebSocket connections
wss.on('connection', (ws) => {
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

// Handle HTTP upgrade requests and upgrade to WebSocket
server.on('upgrade', (request, socket, head) => {
  // No token verification; directly handle WebSocket upgrade
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request);
  });
});

// Start the server on the assigned port by Vercel
server.listen(process.env.PORT || 3000, () => {
  console.log('HTTP server and WebSocket server running');
});
