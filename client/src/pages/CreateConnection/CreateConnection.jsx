import React, { useEffect } from "react";
import { ws } from "../../utils/webSocket";
import { useDispatch, useSelector } from "react-redux";
import { CONNECTION_ACTION_TYPES } from "../../reducers-actions/connectionActions";
import { Link } from "react-router-dom";

//The component initializes a Redux dispatch variable using the useDispatch hook
//and a connection variable using the useSelector hook to extract the connection state from
//the Redux store.

const CreateConnection = () => {
  const dispatch = useDispatch();
  let { connection } = useSelector((state) => ({ ...state }));

//The useEffect hook is used to call the loadConnectionsData function when the component 
//mounts. 
//The loadConnectionsData function sends a message to a WebSocket using the ws utility, and
// when the WebSocket sends a response, it dispatches an action to the Redux store.

  useEffect(() => {
    loadConnectionsData();
  }, []);

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

  return (
    <div className="">
      <h1 className="text-2xl font-extrabold">My connections</h1>
      {connection?.payload?.map((item, index) => (
        <div key={index} className="text-center border border-dashed">
          <p>
            <span className="font-bold">Address: </span> {item.address}
          </p>
          <p>
            <span className="font-bold">Description: </span> {item.description}
          </p>
          <p>
            <span className="font-bold">Explorer: </span> {item.explorer}
          </p>

          <h3 className="my-3 font-bold">Locations</h3>
          {item.locations.map((location, index) => (
            <div key={index}>
              <p>
                <span className="font-bold">Country:</span> {location.country}
              </p>
              <p>
                <span className="font-bold">Site:</span> {location.site}
              </p>
              <p>
                <span className="font-bold">City: </span> {location.city}
              </p>
              <p>
                <span className="font-bold">Street: </span> {location.street}
              </p>
              <p>
                <span className="font-bold">Longitude: </span> {location.lon}
              </p>
              <p>
                <span className="font-bold">Latitude: </span> {location.lat}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CreateConnection;
