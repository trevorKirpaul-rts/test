import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.li`
  background: #d3d3d3;
  margin: 10px 15px;
  padding: 25px;
  display: flex;
  justify-content: space-between;
`;

const FieldWrapper = styled.div``;
const ActionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Key = styled.p`
  font-weight: 500;
  margin-bottom: 5px;
`;
const Value = styled.span`
  display: inline-block;
  font-weight: 300;
`;
// const Body = styled.h3`
//   font-weight: 400;
//   margin-bottom: 5px;
// `;

const Button = styled.button`
  border-radius: 10px;
  display: inline-block;
  padding: 5px 10px;
  background: ${props => {
    if (props.danger) {
      return '#FB4D3D';
    } else if (props.warning) {
      return '#EAC435';
    } else if (props.primary) {
      return '#345995';
    } else {
      return '#383838';
    }
  }};
  color: ${props => (props.warning ? '#383838' : '#f8f8f8')};
  &:hover {
    cursor: pointer;
  }
`;

export default ({ id, name, password, email, handleOpenModal }) => {
  return (
    <Wrapper>
      <FieldWrapper>
        <Key>
          Name: <Value>{name}</Value>
        </Key>
        <Key>
          Password: <Value>{password}</Value>
        </Key>
        <Key>
          Email: <Value>{email}</Value>
        </Key>
      </FieldWrapper>
      <ActionWrapper>
        <Link to={`/editUser/${id}`}>
          <Button warning>Edit</Button>
        </Link>
        <Button primary>View</Button>
        <Button danger onClick={handleOpenModal}>
          Delete
        </Button>
      </ActionWrapper>
    </Wrapper>
  );
};
