import React from "react";
import { Modal } from "antd";

const ModalComponent = ({ visible, onClose, children }) => {
  return (
    <Modal
      open={visible}
      okButtonProps={{ hidden: true }}
      cancelButtonProps={{ hidden: true }}
      onCancel={onClose}
      onOk={onClose}
      closable={false}
      destroyOnClose
    >
      {children}
    </Modal>
  );
};

export default ModalComponent;
