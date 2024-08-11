const WebSocket = require('ws');

// Explicitly define the port you want to use
const port = 8080; // Change this to the desired port number if needed

const wss = new WebSocket.Server({ port });

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

// Log the WebSocket server's running status
console.log(`WebSocket server running at ws://localhost:${port}`); // For local development
// Or, if you're referencing your deployed URL:
console.log('WebSocket server is deployed at wss://networking-1etg.vercel.app');
