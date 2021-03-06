import React from "react";
import { Modal } from "react-bootstrap";

const ModalCOM = ({ handleClose, show, children }) => {
  const showHideClassName = show ? " d-block" : "d-none";
  return (
    <Modal className={`${showHideClassName}`}>
      {children}
      <button onClick={handleClose}> Close </button>
    </Modal>
  );
};

export default Modal;
