import React from "react";
import CreateTile from "./CreateTile";
import GreenPlusIcon from "../../assets/logo/GreenPlusIcon";
import BluePlusIcon from "../../assets/logo/BluePlusIcon";
import "./CreateTileWrapper.css";

// the modals on the dashboard rely on the titles being written exactly like that.
//! IF CHANGES ARE MADE HERE YOU HAVE TO CHANGE IN THEM IN THE "CREATE TILE" file too.

const CreateTileWrapper = () => {
  return (
    <div className="create_wrapper">
      <CreateTile title={"Create New Connection"} icon={<BluePlusIcon />} />
      <CreateTile title={"Create New Job"} icon={<GreenPlusIcon />} />
    </div>
  );
};

export default CreateTileWrapper;
