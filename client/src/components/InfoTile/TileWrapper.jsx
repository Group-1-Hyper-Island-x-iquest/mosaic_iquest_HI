import React from "react";
import InfoTile from "./InfoTile";
import "./TileWrapper.css";
import AlertLogo from "../../assets/logo/AlertLogo";
import JobLogo from "../../assets/logo/JobLogo";
import ConnectionsLogo from "../../assets/logo/ConnectionsLogo";

const TileWrapper = () => {
  return (
    <div className="tile_container">
      <InfoTile
        icon={<AlertLogo />}
        title={"Alerts"}
        count={0}
      />
      <InfoTile
        icon={<JobLogo />}
        title={"Jobs"}
        count={6}
      />
      <InfoTile
        icon={<ConnectionsLogo />}
        title={"Connections"}
        count={9}
      />
    </div>
  );
};

export default TileWrapper;
