import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BUTTON_TYPE_CLASSES } from "../../components/Button/Button";
import { showModal, hideModal } from "../../reducers-actions/modalActions";
import Form from "../../components/Forms/Form";
import { fields1 } from "../../utils/FormTypes";
import { Modal } from "antd";

const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleShowModal = () => {
    setModalOpen(true);
    dispatch(showModal());
  };

  const handleHideModal = () => {
    setModalOpen(false);
    dispatch(hideModal());
  };

  const handleSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className="flex">
      <Modal
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: true }}
        open={modalOpen}
        onCancel={handleHideModal}
      >
        <Form
          fields={fields1}
          buttonClass={BUTTON_TYPE_CLASSES.btn_primary}
          onSubmit={handleSubmit}
        />
      </Modal>
      <button onClick={handleShowModal}>Create connection</button>
    </div>
  );
};

export default Dashboard;
