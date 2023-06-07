import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const PopupModal = ({ isOpen, closeModal, title, content }) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#4b0082',
      color: '#fff',
      borderRadius: '8px',
      textAlign: 'center',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      style={customStyles}
    >
      <h2>{title}</h2>
      <p>{content}</p>
      <button className="btn btn-danger btn-sm" onClick={closeModal}>Close</button>
    </Modal>
  );
};

export default PopupModal;
