import React, { useEffect } from "react";
import { ws } from "../../utils/webSocket";
import { useDispatch, useSelector } from "react-redux";
import { CONNECTION_ACTION_TYPES } from "../../reducers-actions/connectionActions";
import { Link } from "react-router-dom";

//it initializes a Redux dispatch variable using the useDispatch hook 
//and a connection variable using the useSelector hook to extract the connection state from
// the Redux store.

const Dashboard = () => {
  const dispatch = useDispatch();
  let { connection } = useSelector((state) => ({ ...state }));

//defines an useEffect hook that calls the loadConnectionsData function when 
//the component mounts.

  useEffect(() => {
    loadConnectionsData();
  }, []);

//The 'loadConnectionsData' function sends a WebSocket message to the server to request 
//all available connections. When the server responds, 
//the onmessage callback extracts the JSON data from the response and 
//dispatches an action to update the connection state in the Redux store.

  const loadConnectionsData = () => {
    ws.send(JSON.stringify({ type: "MineService", action: "LOAD_ALL_CONNECTIONS" }));
    ws.onmessage = (res) => {
      dispatch({
        type: CONNECTION_ACTION_TYPES.LOAD_ALL_CONNECTIONS,
        payload: JSON.parse(res.data),
      });
    };
  };

  console.log(connection);

//The component then returns a simple div element containing the text "DashBoard"
  return <div className="text-center">DashBoard</div>;
};

export default Dashboard;
