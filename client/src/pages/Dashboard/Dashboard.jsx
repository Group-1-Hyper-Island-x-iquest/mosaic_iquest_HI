import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BUTTON_TYPE_CLASSES } from "../../components/Button/Button";
import { showModal, hideModal } from "../../reducers-actions/modalActions";
import Form from "../../components/Forms/Form";
import { connectionType, caseSHMI } from "../../utils/FormTypes";
import { Modal } from "antd";

const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [type, setType] = useState(null);
  const dispatch = useDispatch();

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
    console.log(formData["connection type"]);
    // step 1: store the formData val in useState // reducer
    setType(formData["connection type"]);
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
      default:
        return null;
    }
  };

  return (
    <div className="flex">
      <Modal
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: true }}
        destroyOnClose
        open={modalOpen}
        onCancel={handleHideModal}
      >
        {!type && (
          <Form
            fields={connectionType}
            buttonClass={BUTTON_TYPE_CLASSES.btn_primary}
            onSubmit={handleSubmit}
          />
        )}
        <RenderFormChildren type={type} />
      </Modal>
      <button onClick={handleShowModal}>Create connection</button>
    </div>
  );
};

export default Dashboard;
