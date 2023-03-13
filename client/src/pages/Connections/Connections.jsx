import React, { useEffect } from "react";
import { ws } from "../../utils/webSocket";
import { useDispatch, useSelector } from "react-redux";
import { CONNECTION_ACTION_TYPES } from "../../reducers-actions/connectionActions";

const CreateConnection = () => {
  const dispatch = useDispatch();
  let { connection } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadConnectionsData();
    // eslint-disable-next-line
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
