import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button, { BUTTON_TYPE_CLASSES } from "../../components/Button/Button";
import { showModal, hideModal } from "../../reducers-actions/modalActions";
import Form from "../../components/Forms/Form";
import { connectionType, caseSHMI, caseElvaco } from "../../utils/FormTypes";
import { Modal } from "antd";
import { CONNECTION_ACTION_TYPES } from "../../reducers-actions/connectionActions";
import { ws } from "../../utils/webSocket";

const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [type, setType] = useState(null);

  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { connection } = useSelector((state) => ({ ...state }));
  console.log("OK", ok);
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

  const handleSubmit = (formData) => {
    setLoading(true);
    try {
      console.log(formData["connection type"]);
      console.log("formData", formData);
      // step 1: store the formData val in useState // reducer
      setType(formData["connection type"]);
      dispatch({ type: CONNECTION_ACTION_TYPES.CREATE_CONNECTION, payload: formData });

      if (connection !== null) {
        console.log("connection is valid");
        ws.send(JSON.stringify(formData));
        setOk(true);
        setLoading(false);
        handleHideModal();
        setConfirmationModalOpen(true);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Renders the form according to the connection type
  const RenderFormChildren = ({ type }) => {
    switch (type) {
      case "SHMI": {
        return (
          <Form
            fields={caseSHMI}
            buttonClass={BUTTON_TYPE_CLASSES.btn_primary}
            onSubmit={handleSubmit}
          />
        );
      }
      case "ELVACO": {
        return (
          <Form
            fields={caseElvaco}
            buttonClass={BUTTON_TYPE_CLASSES.btn_primary}
            onSubmit={handleSubmit}
          />
        );
      }
      default:
        return null;
    }
  };

  return (
    <div className="flex">
      <Modal
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: true }}
        open={modalOpen}
        onCancel={handleHideModal}
        destroyOnClose
      >
        {!type && (
          <Form
            fields={connectionType}
            onSubmit={handleSubmit}
            buttonClass={BUTTON_TYPE_CLASSES.btn_primary}
          />
        )}
        {type && <RenderFormChildren type={type} />}
      </Modal>
      <button onClick={handleShowModal}>Create connection</button>
      {/* Confirmation modal */}
      {ok && (
        <Modal open={ok && confirmationModalOpen} onCancel={() => setConfirmationModalOpen(false)}>
          <p>Connection Created</p>
          <Button buttonType={BUTTON_TYPE_CLASSES.btn_cancel}>Close</Button>
          <Button buttonType={BUTTON_TYPE_CLASSES.btn_primary}>Details</Button>
          <Button
            onClick={() => navigate("/create-new-job")}
            buttonType={BUTTON_TYPE_CLASSES.btn_secondary}
          >
            Create Job
          </Button>
        </Modal>
      )}
    </div>
  );
};

export default Dashboard;
