const express = require("express");
const WebSocket = require("ws");
const { responses, createJobResponse, createConnectionResponse } = require("./payloads");

const app = express();
const server = app.listen(8000, () => {
  console.log("Server started on port 8000");
});

const wss = new WebSocket.Server({ server });

const loadWsResponse = (message) => {
  if (message.action === "CREATE_CONNECTION") {
    if (message.connection.type === "se.iquest.iqmine.connections.SMHIConnection")
      return createConnectionResponse(message.connection);
    return { action: "CREATE_CONNECTION_FAILED", message: "Invalid connection" };
  }
  if (message.action === "RUN_EXPLORER") {
    if (message.job.type === "se.iquest.iqmine.poller.SMHIPoller")
      return createJobResponse(message.job);
    return { action: "RUN_EXPLORER_FAILED", message: "Invalid job type" };
  }
  const wsResponse = responses.find((respone) => respone.action.startsWith(message.action)); //Returns object if found, otherwise returns undefined.
  if (wsResponse) return wsResponse; //if wsResponse is not undefined
  return { action: "ERROR", message: "Invalid command" };
};

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (message) => {
    try {
      const payload = JSON.parse(message);
      console.log("request: ", payload);
      const response = loadWsResponse(payload);
      console.log("response: ", response);
      ws.send(JSON.stringify(response));
    } catch (err) {
      console.error(err);
      ws.send(JSON.stringify({ error: "Invalid message format" }));
    }
  });
});
