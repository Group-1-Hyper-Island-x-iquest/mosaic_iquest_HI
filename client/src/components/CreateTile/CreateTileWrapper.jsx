import React from "react";
import CreateTile from "./CreateTile";
import GreenPlusIcon from "../../assets/logo/GreenPlusIcon";
import BluePlusIcon from "../../assets/logo/BluePlusIcon";
import "./CreateTileWrapper.css";

function CreateTileWrapper() {
  return (
    <div className="create_wrapper">
      <CreateTile
        title={"Create New Connection"}
        icon={<BluePlusIcon />}
      />
      <CreateTile
        title={"Create New Job"}
        icon={<GreenPlusIcon />}
      />
    </div>
  );
}

export default CreateTileWrapper;
