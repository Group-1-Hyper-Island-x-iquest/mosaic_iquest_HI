import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CONNECTION_ACTION_TYPES } from "./reducers-actions/connectionActions";

const App = () => {
  const dispatch = useDispatch();
  let { connection } = useSelector((state) => ({ ...state }));

  // Connection string and socket
  const ws = new WebSocket("ws://localhost:8000");

  useEffect(() => {
    handleConnection();
  }, []);

  const handleConnection = () => {
    ws.onopen = (res) => console.log("Open Connection ====>", res);
    ws.onmessage = (res) => {
      dispatch({
        type: CONNECTION_ACTION_TYPES.LOAD_ALL_CONNECTIONS,
        payload: JSON.parse(res.data),
      });
    };
  };

  const handleSendData = () => {
    ws.send(JSON.stringify({ type: "MineService", action: "LOAD_ALL_CONNECTIONS" }));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h2 className="text-red-500 text-7xl">Group 1 Project</h2>
      <div className="my-3">
        <button onClick={handleSendData}>Click me!</button>
      </div>

      {JSON.stringify(connection)}
    </div>
  );
};

export default App;
