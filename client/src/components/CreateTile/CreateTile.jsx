import React from "react";
import "./CreateTile.css";

const CreateTile = (props) => {
  const { title, icon } = props;
  return (
    <>
      <div className="createTile">
        <h1 className="create_tile_title">
          {title}
        </h1>
        <div className="plus_icon">
          {icon}
        </div>
      </div>
    </>
  );
};

export default CreateTile;
