import React from "react";
import CreateTile from "./CreateTile";
import GreenPlusIcon from "../../assets/logo/GreenPlusIcon";
import BluePlusIcon from "../../assets/logo/BluePlusIcon";
import "./CreateTileWrapper.css";

function CreateTileWrapper(props) {
  const { handleShowModal } = props;
  return (
    <div className="create_wrapper">
      <CreateTile
        handleShowModal={handleShowModal}
        title={"Create New Connection"}
        icon={<BluePlusIcon />}
      />
      <CreateTile
        handleShowModal={handleShowModal}
        title={"Create New Job"}
        icon={<GreenPlusIcon />}
      />
    </div>
  );
}

export default CreateTileWrapper;
