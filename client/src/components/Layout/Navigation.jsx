import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaHome } from "react-icons/fa";
import { RxMagnifyingGlass } from "react-icons/rx";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Navigation = () => {
  return (
    <header>
      <nav className="top_nav">
        <h2>mosaic</h2>
      </nav>
      <nav className="mid_nav">
        <div className="home_logo">
          <FaHome size={22} />/ DASHBOARD
        </div>
        <div className="searchBarBox">
          <input type="search" placeholder="Search" className="searchBar" />
          <RxMagnifyingGlass className="searchGlass" size={26} />
        </div>
        <div className="profile_logo">
          {" "}
          <FaUserCircle
            style={{
              color: "black",
            }}
            size={23}
          />
          <p>HI_MINER</p>
          <MdOutlineKeyboardArrowDown size={23} />
        </div>
      </nav>
      <nav className="bottom_nav">
        <ul className="nav_links">
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/create-new-connection"> Connections</Link>
          </li>
          <li>
            <Link to="/create-new-job"> Jobs</Link>
          </li>
          <li>
            <Link to="/"> Alerts</Link>
          </li>
          <li>
            <Link to="/"> Admin Tools</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
