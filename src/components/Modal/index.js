import React from 'react'
import "./style.css";

const Modal = ({ closeModal, confirmModal, modalContentText_1, modalContentText_2 }) => {
  return (
    <div className="modal">
      <div className="modalContent">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <p>{modalContentText_1}</p>
        <p>{modalContentText_2}</p>
        <div className="buttonContainer">
          <button onClick={confirmModal} className="modalButton confirmButton">
            Confirm
          </button>
          <button onClick={closeModal} className="modalButton cancelButton">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;