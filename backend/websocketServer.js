const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();

// Define routes for your HTTP server
app.get('/', (req, res) => {
  res.send('Hello from the HTTP server!');
});

// Create an HTTP server
const server = http.createServer(app);

// Create a WebSocket server that shares the same HTTP server
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('New WebSocket client connected');

  ws.on('message', (message) => {
    console.log(`Received message => ${message}`);
    
    // Broadcast the message to all clients except the sender
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on('close', () => {
    console.log('WebSocket client disconnected');
  });
});

// Start the server
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
