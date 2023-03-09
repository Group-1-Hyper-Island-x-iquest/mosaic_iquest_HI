import React from "react";
import "./CreateTile.css";
import PlusIcon from "../../assets/logo/PlusIcon";

const CreateTile = () => {
  return (
    <>
      <div className="createTile">
        Create new connection{" "}
        <PlusIcon className="PlusIcon" />
      </div>
    </>
  );
};

export default CreateTile;
