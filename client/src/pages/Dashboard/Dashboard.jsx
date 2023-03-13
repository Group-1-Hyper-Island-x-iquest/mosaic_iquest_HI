import React, {
  useEffect,
  useState,
} from "react";
import { ws } from "../../utils/webSocket";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { CONNECTION_ACTION_TYPES } from "../../reducers-actions/connectionActions";
import { Link } from "react-router-dom";
import InfoTile from "../../components/InfoTile/InfoTile";
import TileWrapper from "../../components/InfoTile/TileWrapper";
import CreateTileWrapper from "../../components/CreateTile/CreateTileWrapper";
import Button from "../../components/Button/Button";
import { BUTTON_TYPE_CLASSES } from "../../components/Button/Button";
import { AiFillPlusCircle } from "react-icons/ai";
import HomeLogo from "../../assets/logo/HomeLogo";
import ProfileLogo from "../../assets/logo/ProfileLogo";
import { FaUserCircle } from "react-icons/fa";
import { RxMagnifyingGlass } from "react-icons/rx";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {
  showModal,
  hideModal,
} from "../../reducers-actions/modalActions";
import Form from "../../components/Forms/Form";
import {
  connectionType,
  caseSHMI,
} from "../../utils/FormTypes";
import { Modal } from "antd";

const Dashboard = () => {
  const [modalOpen, setModalOpen] =
    useState(false);
  const [type, setType] =
    useState(null);
  const dispatch = useDispatch();

  // let { connection } = useSelector(
  //   (state) => ({ ...state })
  // );

  const handleShowModal = () => {
    setModalOpen(true);
    setType(null);
    dispatch(showModal());
  };

  const handleHideModal = () => {
    setModalOpen(false);
    dispatch(hideModal());
  };

  // const loadConnectionsData = () => {
  //   ws.send(
  //     JSON.stringify({
  //       type: "MineService",
  //       action: "LOAD_ALL_CONNECTIONS",
  //     })
  //   );
  //   ws.onmessage = (res) => {
  //     dispatch({
  //       type: CONNECTION_ACTION_TYPES.LOAD_ALL_CONNECTIONS,
  //       payload: JSON.parse(res.data),
  //     });
  //   };

  const handleSubmit = (formData) => {
    console.log(
      formData["connection type"]
    );
    // step 1: store the formData val in useState // reducer
    setType(
      formData["connection type"]
    );
  };

  const RenderFormChildren = ({
    type,
  }) => {
    switch (type) {
      case "smhi": {
        return (
          <Form
            fields={caseSHMI}
            buttonClass={
              BUTTON_TYPE_CLASSES.btn_primary
            }
            onSubmit={handleSubmit}
          />
        );
      }
      default:
        return null;
    }
  };

  return (
    <>
      <nav className="mid_nav">
        <div className="home_logo">
          <HomeLogo />/ DASHBOARD
        </div>
        <div className="searchBarBox">
          <input
            type="search"
            placeholder="Search"
            className="searchBar"
          />
          <RxMagnifyingGlass
            className="searchGlass"
            size={26}
          />
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
          <MdOutlineKeyboardArrowDown
            size={23}
          />
        </div>
      </nav>
      <nav className="bottom_nav">
        <ul className="nav_links">
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/create-new-connection">
              {" "}
              Connections
            </Link>
          </li>
          <li>
            <Link to="/create-new-job">
              {" "}
              Jobs
            </Link>
          </li>
          <li>
            <Link to="/"> Alerts</Link>
          </li>
          <li>
            <Link to="/">
              {" "}
              Admin Tools
            </Link>
          </li>
        </ul>
      </nav>
      <TileWrapper />

      <CreateTileWrapper />

      <div className="text-center"></div>

      <div className="flex">
        <Modal
          okButtonProps={{
            hidden: true,
          }}
          cancelButtonProps={{
            hidden: true,
          }}
          destroyOnClose
          open={modalOpen}
          onCancel={handleHideModal}
        >
          {!type && (
            <Form
              fields={connectionType}
              buttonClass={
                BUTTON_TYPE_CLASSES.btn_primary
              }
              onSubmit={handleSubmit}
            />
          )}
          <RenderFormChildren
            type={type}
          />
        </Modal>
        <button
          onClick={handleShowModal}
        >
          Create connection
        </button>
      </div>
    </>
  );
};

export default Dashboard;
