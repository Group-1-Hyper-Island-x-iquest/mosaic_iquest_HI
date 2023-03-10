import React, {
  useEffect,
} from "react";
import { ws } from "../../utils/webSocket";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { CONNECTION_ACTION_TYPES } from "../../reducers-actions/connectionActions";
import { Link } from "react-router-dom";
import InfoTile from "../../components/InfoTile/InfoTile";
import TileWrapper from "../../components/InfoTile/TileWrapper";
import CreateTileWrapper from "../../components/CreateTile/CreateTileWrapper";
import Button from "../../components/Button/Button";
import { BUTTON_TYPE_CLASSES } from "../../components/Button/Button";
import { AiFillPlusCircle } from "react-icons/ai";

const Dashboard = () => {
  const dispatch = useDispatch();
  let { connection } = useSelector(
    (state) => ({ ...state })
  );

  useEffect(() => {
    loadConnectionsData();
  }, []);

  const loadConnectionsData = () => {
    ws.send(
      JSON.stringify({
        type: "MineService",
        action: "LOAD_ALL_CONNECTIONS",
      })
    );
    ws.onmessage = (res) => {
      dispatch({
        type: CONNECTION_ACTION_TYPES.LOAD_ALL_CONNECTIONS,
        payload: JSON.parse(res.data),
      });
    };
  };

  console.log(connection);

  return (
    <>
      <TileWrapper />

      <CreateTileWrapper />
      <Button
        className={`${BUTTON_TYPE_CLASSES.btn_primary}`}
      >
        Next
      </Button>
      <Button
        className={`${BUTTON_TYPE_CLASSES.btn_secondary}`}
      >
        Back
      </Button>
      <Button
        className={`${BUTTON_TYPE_CLASSES.btn_save_inactive}`}
      >
        Save
      </Button>
      <Button
        className={`${BUTTON_TYPE_CLASSES.btn_primary}`}
      >
        Save
      </Button>
      <Button
        className={`${BUTTON_TYPE_CLASSES.btn_see_details}`}
      >
        See details
      </Button>
      <Button
        className={`${BUTTON_TYPE_CLASSES.btn_add_location}`}
      >
        Add location{" "}
        <AiFillPlusCircle size={19} />
      </Button>

      <div className="text-center"></div>
    </>
  );
};

export default Dashboard;
