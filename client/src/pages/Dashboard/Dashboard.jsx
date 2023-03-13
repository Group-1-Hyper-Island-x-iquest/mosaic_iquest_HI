import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Button, { BUTTON_TYPE_CLASSES } from "../../components/Button/Button";
import Form from "../../components/Forms/Form";
import { showModal, hideModal } from "../../reducers-actions/modalActions";
import { connectionType, caseSHMI, caseElvaco } from "../../utils/FormTypes";
import { ws } from "../../utils/webSocket";
import { CONNECTION_ACTION_TYPES } from "../../reducers-actions/connectionActions";
import TileWrapper from "../../components/InfoTile/TileWrapper";
import CreateTileWrapper from "../../components/CreateTile/CreateTileWrapper";
import HomeLogo from "../../assets/logo/HomeLogo";
import { FaUserCircle } from "react-icons/fa";
import { RxMagnifyingGlass } from "react-icons/rx";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Modal } from "antd";

const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [type, setType] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isConnectionCreated, setIsConnectionCreated] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { connection } = useSelector((state) => ({ ...state }));
  console.log("IS CONNECTION CREATED ", isConnectionCreated);
  console.log("type", type);
  console.log("connection", connection);

  const handleShowModal = () => {
    setModalOpen(true);
    setType(null);
    dispatch(showModal());
  };

  const handleHideModal = () => {
    setModalOpen(false);
    dispatch(hideModal());
  };

  const handleSubmit = async (formData) => {
    console.log(formData);
    setLoading(true);

    try {
      console.log(formData["connection type"]);
      console.log("formData", formData);
      // store the formData val in useState // reducer
      setType(formData["connection type"]);
      dispatch({
        type: CONNECTION_ACTION_TYPES.CREATE_CONNECTION,
        payload: formData,
      });

      if (connection !== null) {
        console.log("connection is valid");
        await ws.send(
          JSON.stringify({
            type: "MineService",
            action: "CREATE_CONNECTION",
            connection: formData,
          })
        );
        setIsConnectionCreated(true);
        setLoading(false);
        handleHideModal();
        setConfirmationModalOpen(true);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <>
          <nav className="mid_nav">
            <div className="home_logo">
              <HomeLogo />/ DASHBOARD
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

          <TileWrapper handleShowModal={handleShowModal} />
          <CreateTileWrapper handleShowModal={handleShowModal} />
        </>
      )}

      <Modal
        isConnectionCreated
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: true }}
        open={modalOpen}
        onCancel={handleHideModal}
        destroyOnClose
      >
        {type ? (
          <Form
            fields={type === "SHMI" ? caseSHMI : caseElvaco}
            buttonClass={BUTTON_TYPE_CLASSES.btn_primary}
            onSubmit={handleSubmit}
          />
        ) : (
          <Form
            fields={connectionType}
            onSubmit={handleSubmit}
            buttonClass={BUTTON_TYPE_CLASSES.btn_primary}
          />
        )}
      </Modal>

      {/* Confirmation modal */}
      {isConnectionCreated && (
        <Modal
          okButtonProps={{ hidden: true }}
          cancelButtonProps={{ hidden: true }}
          isConnectionCreated
          ButtonProps={{ hidden: true }}
          open={isConnectionCreated && confirmationModalOpen}
          onCancel={() => setConfirmationModalOpen(false)}
        >
          <p>Connection Created</p>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.btn_primary}
            onClick={() => setConfirmationModalOpen(false)}
          >
            Close
          </Button>
          <Button
            onClick={() => navigate("/create-new-connection")}
            buttonType={BUTTON_TYPE_CLASSES.btn_primary}
          >
            Details
          </Button>
          <Button
            onClick={() => navigate("/create-new-job")}
            buttonType={BUTTON_TYPE_CLASSES.btn_secondary}
          >
            Create Job
          </Button>
        </Modal>
      )}
    </>
  );
};

export default Dashboard;
