import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ws } from "./utils/webSocket";

// Pages
import Dashboard from "./pages/Dashboard/Dashboard";
import CreateConnection from "./pages/CreateConnection/CreateConnection";
import CreateJob from "./pages/CreateJob/CreateJob";

const App = () => {
  useEffect(() => {
    handleConnection();
  });

  const handleConnection = () => {
    ws.onopen = (res) => console.log("Open Connection ====>", res);
  };

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/create-new-connection" element={<CreateConnection />} />
      <Route path="/create-new-job" element={<CreateJob />} />
    </Routes>
  );
};

export default App;
