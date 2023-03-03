import React, { useState } from "react";
import { Modal } from "antd";
import Button from "../Button/Button";
import { BUTTON_TYPE_CLASSES } from "../Button/Button";
import { useSelector } from "react-redux";

const ModalComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  let { connection } = useSelector((state) => ({ ...state }));

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button buttonType={BUTTON_TYPE_CLASSES.btn_secondary} onClick={showModal}>
        Open Modal
      </Button>

      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {JSON.stringify(connection)}
      </Modal>
    </>
  );
};

export default ModalComponent;
