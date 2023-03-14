import React from "react";
import "./InfoTile.css";
import AlertLogo from "../../assets/logo/AlertLogo";

export const INFOTILE_TYPE_CLASSES = {
  tile_primary: "tile_primary",
};

const InfoTile = (props) => {
  const { icon, title, count } = props;

  return (
    <>
      <div className="relative tile_beauty">
        <div className="absolute top-[-40px] right-[19px]">
          {icon}
        </div>
        <h1 className="test">
          {title}{" "}
        </h1>
        <h2>{count}</h2>
      </div>
    </>
  );
};

export default InfoTile;
