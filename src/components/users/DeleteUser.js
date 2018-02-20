import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

// STYLES
const Button = styled.button`
  border: none;
  display: inline-block;
  padding: 10px 10px;
  background: palevioletred;
  color: #f8f8f8;

  &:hover {
    cursor: pointer;
  }
`;

const ModalTitle = styled.h3`
  font-weight: 300;
  font-size: 1.5em;
`;

const ModalWarning = styled.p`
  color: red;
`;

const modalStyle = {
  overlay: {},
  content: {
    border: '2px solid palevioletred',
    textAlign: 'center',
    maxHeight: '300px',
    maxWidth: '450px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
};

export default ({ open, handleCloseModal, handleDeleteUser }) => {
  return (
    <Modal
      isOpen={open}
      onRequestClose={handleCloseModal}
      contentLabel="Modal"
      ariaHideApp={false}
      style={modalStyle}
    >
      <ModalTitle>Are you sure you want to delete this user?</ModalTitle>
      <ModalWarning>This action is permanent!</ModalWarning>
      <Button onClick={handleDeleteUser}>Confirm Delete</Button>
    </Modal>
  );
};
