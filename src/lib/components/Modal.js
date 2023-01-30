import React from 'react';
import PropTypes from 'prop-types';
import "./../css/main.css";

/**
 * React Component - A simple React Modal component to display a text message
 * @module Modal
 * @param {String} message - The message the modal should display
 * @param {Function} onClose - A callback that closes the modal
 * @returns { HTMLElement } - HTMLElement
 */
const Modal = ( { message, onClose } ) => {

  return (
   // closing by clicking on the overlay window or on the cross
    <div onClick={onClose} className="modal overlay">
      {/* stopPropagation prevents onClose to be propagated to the modal window */}
      <div onClick={(e) => {
        e.stopPropagation();
      }} className="modalBody">
        <p onClick={onClose} className="modal__closeCross">X</p>
        <p className="modalMessage">{message}</p>
      </div>
    </div>
  );
};

Modal.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}

// Default values for props:
Modal.defaultProps = {
  message: "Successful operation !"
}

export default Modal;