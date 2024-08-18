const http = require('http');
const WebSocket = require('ws');

// Hardcoded WebSocket server URL
const websocketUrl = 'wss://chat-server-networking-197a435521f1.herokuapp.com/';

// Create HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end(`Server is running at ${websocketUrl}`);
  console.log(`HTTP request received. Server running at ${websocketUrl}`);
});

// Create WebSocket server
const wss = new WebSocket.Server({ noServer: true });

wss.on('connection', (ws) => {
  console.log(`New WebSocket client connected at ${websocketUrl}`);

  ws.on('message', (message) => {
    console.log(`Received message => ${message}`);
    processMessage(message, ws);
  });

  ws.on('close', () => {
    console.log(`WebSocket client disconnected from ${websocketUrl}`);
  });
});

// Handle WebSocket upgrades
server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request);
  });
});

// Start server and listen on the specified port
server.listen(process.env.PORT || 3000, () => {
  console.log(`Server is listening at ${websocketUrl} on port ${process.env.PORT || 3000}`);
});

// Asynchronous message processing
function processMessage(message, ws) {
  setImmediate(() => {
    ws.send(`Echo: ${message}`);
  });
}
