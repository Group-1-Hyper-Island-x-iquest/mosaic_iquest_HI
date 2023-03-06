// Connection string and socket
export const ws = new WebSocket(
  "ws://localhost:8000"
);

//This line of code creates a new WebSocket object ws and connects to the WebSocket server
// running on localhost at port 8000.
// The new WebSocket constructor takes a URL as its first argument, which specifies
//the WebSocket server to connect to.
// In this case, the URL is simply the localhost:8000 address, assuming that the WebSocket
//server is running on the same machine as the client application.
