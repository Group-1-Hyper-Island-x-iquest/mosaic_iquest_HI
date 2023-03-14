import React, { useState } from "react";
//redux
import { connectionType, caseSHMI, caseElvaco } from "../../utils/FormTypes";
import { CONNECTION_ACTION_TYPES } from "../../reducers-actions/connectionActions";
import {
  hideConfirmationModal,
  hideMainModal,
  MODAL_ACTION_TYPES,
} from "../../reducers-actions/modalActions";
import { useDispatch, useSelector } from "react-redux";
//react router
import { useNavigate } from "react-router-dom";
// components
import Button, { BUTTON_TYPE_CLASSES } from "../../components/Button/Button";
import Form from "../../components/Forms/Form";
import CreateTileWrapper from "../../components/CreateTile/CreateTileWrapper";
import TileWrapper from "../../components/InfoTile/TileWrapper";
import LoadingSpinner from "../../components/Layout/LoadingSpinner";
import ModalComponent from "../../components/Modal/Modal";
//websocket
import { ws } from "../../utils/webSocket";

const Dashboard = () => {
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const navigate = useNavigate();
  const { connection, modal } = useSelector((state) => ({ ...state }));
  const { currentModalType } = modal;
  const dispatch = useDispatch();
  const [type, setType] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isConnectionCreated, setIsConnectionCreated] = useState(false);

  // Logs
  console.log("IS CONNECTION CREATED ", isConnectionCreated);
  console.log("type", type);
  console.log("connection", connection);
  console.log(currentModalType);

  const handleMainModalClose = () => {
    dispatch(hideMainModal());
  };

  const handleConfirmationModalClose = () => {
    dispatch(hideConfirmationModal());
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
        handleMainModalClose();
        setConfirmationModalOpen(true);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const renderForm = () => {
    switch (currentModalType) {
      case MODAL_ACTION_TYPES.SHOW_MODAL_CONNECTION:
        return type ? (
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
        );
      case MODAL_ACTION_TYPES.SHOW_MODAL_JOB:
        return <p>Job form</p>;
      default:
        return null;
    }
  };

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <TileWrapper />
          <CreateTileWrapper />
        </>
      )}

      <ModalComponent visible={modal.visible} onClose={handleMainModalClose}>
        {renderForm()}
      </ModalComponent>

      {/* Confirmation modal */}
      {isConnectionCreated && (
        <ModalComponent visible={confirmationModalOpen} onClose={handleConfirmationModalClose}>
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
        </ModalComponent>
      )}
    </>
  );
};

export default Dashboard;
