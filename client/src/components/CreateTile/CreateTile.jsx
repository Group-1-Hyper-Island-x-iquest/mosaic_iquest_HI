import React from "react";
import "./CreateTile.css";

const CreateTile = (props) => {
  const { title, icon, handleShowModal } = props;
  return (
    <>
      <button onClick={handleShowModal} className="createTile">
        <h1 className="create_tile_title">{title}</h1>
        <div className="plus_icon">{icon}</div>
      </button>
    </>
  );
};

export default CreateTile;
