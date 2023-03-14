import React, { useEffect } from "react"; 
import { Routes, Route } from "react-router-dom";
import { ws } from "./utils/webSocket";

// Pages
import Dashboard from "./pages/Dashboard/Dashboard";
import CreateConnection from "./pages/Connections/Connections";
import CreateJob from "./pages/Jobs/Jobs";

const App = () => {
  useEffect(() => { //The useEffect hook is used to create a WebSocket connection with the server using the handleConnection function.
    handleConnection();
  }, []);

<<<<<<< HEAD
///handleConnection is called in the useEffect hook with an empty dependency array. 
  //This ensures that handleConnection is only called once, after the component mounts
  
  const handleConnection = () => { /
    ws.onopen = (res) => console.log("Open Connection ====>", res);
  };.
=======
  const handleConnection = () => {
    ws.onopen = (res) => {
      return res;
    };
  };
>>>>>>> a52083f987cae8eb6c80dd2478827dfadd279dbf

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
