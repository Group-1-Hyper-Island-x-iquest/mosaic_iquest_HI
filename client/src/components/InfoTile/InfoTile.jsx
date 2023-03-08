import React from "react";
import "./InfoTile.css";
import AlertLogo from "../../assets/logo/AlertLogo";


export const INFOTILE_TYPE_CLASSES = {
  tile_primary: "tile_primary",
  
};

const InfoTile = () => {
  return (
    <>
      <div className="tile_beauty">
      <AlertLogo/>
      <h1 className="test"> Alerts</h1>
      <h2>0</h2>
      </div>
    </>
  );
};

export default InfoTile;

