import React, { useEffect } from "react"; 
import { Routes, Route } from "react-router-dom";
import { ws } from "./utils/webSocket";

// Pages
import Dashboard from "./pages/Dashboard/Dashboard";
import CreateConnection from "./pages/CreateConnection/CreateConnection";
import CreateJob from "./pages/CreateJob/CreateJob";

const App = () => {
  useEffect(() => { //The useEffect hook is used to create a WebSocket connection with the server using the handleConnection function.
    handleConnection();
  });

///handleConnection is called in the useEffect hook with an empty dependency array. 
  //This ensures that handleConnection is only called once, after the component mounts
  
  const handleConnection = () => { /
    ws.onopen = (res) => console.log("Open Connection ====>", res);
  };.

  //The Routes component is used from the react-router-dom library to define 
  //different routes based on the URL path.
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/create-new-connection" element={<CreateConnection />} />
      <Route path="/create-new-job" element={<CreateJob />} />
    </Routes>
  );
};

export default App;
