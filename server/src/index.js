//This is a Node.js server that creates a WebSocket server using the ws package.
//It listens on port 8000 for incoming WebSocket connections and
//handles the messages received from clients

const express = require("express");
const WebSocket = require("ws");
const {
  responses,
  createJobResponse,
  createConnectionResponse,
} = require("./payloads");

const app = express();
const server = app.listen(8000, () => {
  console.log(
    "Server started on port 8000"
  );
});

const wss = new WebSocket.Server({
  server,
});
//The loadWsResponse function takes the message received from the client,
// checks the action and returns the appropriate response.
const loadWsResponse = (message) => {
  switch (message.action) {
    case "CREATE_CONNECTION":
      if (
        message.connection.type ===
        "se.iquest.iqmine.connections.SMHIConnection"
      )
        return createConnectionResponse(
          message.connection
        );
      return {
        action:
          "CREATE_CONNECTION_FAILED",
        message: "Invalid connection",
      };
    case "RUN_EXPLORER":
      if (
        message.job.type ===
        "se.iquest.iqmine.poller.SMHIPoller"
      )
        return createJobResponse(
          message.job
        );
      return {
        action: "RUN_EXPLORER_FAILED",
        message: "Invalid job type",
      };
    default: //Returns object if found, otherwise returns undefined.
      //if wsResponse is not undefined
      const wsResponse = responses.find(
        (response) =>
          response.action.startsWith(
            message.action
          )
      );
      if (wsResponse) return wsResponse;
      return {
        action: "ERROR",
        message: "Invalid command",
      };
  }
};

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (message) => {
    //callback function: Server handling the incoming messages
    try {
      const payload =
        JSON.parse(message); // parsing them into JSON
      console.log("request: ", payload);
      const response =
        loadWsResponse(payload); //and passing them to the loadWsResponse function.
      console.log(
        "response: ",
        response
      );
      ws.send(JSON.stringify(response)); //the server sends the response back to the client as a JSON string.
    } catch (err) {
      console.error(err);
      ws.send(
        JSON.stringify({
          error:
            "Invalid message format",
        })
      );
    }
  });
});
