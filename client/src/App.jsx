import React, { useEffect } from "react";

const App = () => {
  // Connection string and socket
  const ws = new WebSocket("ws://localhost:8000");

  useEffect(() => {
    handleConnection();
  }, [ws]);

  const handleConnection = () => {
    ws.onopen = (res) => console.log("Open Connection ====>", res);
    ws.onmessage = (res) => console.log("Message from backend ====>", JSON.parse(res.data));
  };

  const handleSendData = () => {
    ws.send(JSON.stringify({ type: "MineService", action: "LOAD_ALL_CONNECTIONS" }));
  };

  return (
    <div className=" flex justify-center flex-col items-center h-screen">
      <h2 className="text-7xl text-red-500">Group 1 Project</h2>
      <div className="my-3">
        <button onClick={handleSendData}>Click me!</button>
      </div>
    </div>
  );
};

export default App;
