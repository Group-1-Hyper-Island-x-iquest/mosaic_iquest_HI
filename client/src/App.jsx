import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ws } from "./utils/webSocket";

// Pages
import Dashboard from "./pages/Dashboard/Dashboard";
import CreateConnection from "./pages/Connections/Connections";
import CreateJob from "./pages/Jobs/Jobs";

const App = () => {
  useEffect(() => {
    handleConnection();
  }, []);

  const handleConnection = () => {
    ws.onopen = (res) => res;
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
