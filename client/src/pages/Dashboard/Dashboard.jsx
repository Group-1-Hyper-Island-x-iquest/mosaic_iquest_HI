import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button, { BUTTON_TYPE_CLASSES } from "../../components/Button/Button";
import { showModal, hideModal } from "../../reducers-actions/modalActions";
import Form from "../../components/Forms/Form";
import { connectionType, caseSHMI, caseElvaco } from "../../utils/FormTypes";
import { Modal } from "antd";
import { CONNECTION_ACTION_TYPES } from "../../reducers-actions/connectionActions";

const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [type, setType] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const dispatch = useDispatch();

  const { connection } = useSelector((state) => ({ ...state }));

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
      dispatch({
        type: CONNECTION_ACTION_TYPES.CREATE_CONNECTION,
        payload: formData,
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const RenderFormChildren = ({ type }) => {
    switch (type) {
      case "smhi": {
        return (
          <Form
            fields={caseSHMI}
            buttonClass={BUTTON_TYPE_CLASSES.btn_primary}
            onSubmit={handleSubmit}
          />
        );
      }
      case "elvaco": {
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

  console.log("OK", ok);
  console.log("type", type);

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
          <Button buttonType={BUTTON_TYPE_CLASSES.btn_secondary}>Create Job</Button>
        </Modal>
      )}
    </div>
  );
};

export default Dashboard;
