import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

// STYLES
const Button = styled.button`
  display: inline-block;
  padding: 5px 10px;
  background: #fb4d3d;
  color: #f8f8f8;
`;

export default ({ open, handleCloseModal, handleDeleteUser }) => {
  return (
    <Modal
      isOpen={open}
      onRequestClose={handleCloseModal}
      contentLabel="Modal"
      ariaHideApp={false}
    >
      <h3>Are you sure you want to delete this user?</h3>
      <p>This action is permanent!</p>
      <Button onClick={handleDeleteUser}>Confirm Delete</Button>
    </Modal>
  );
};
