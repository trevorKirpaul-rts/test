import React from 'react';
import UserListItem from './UserListItem';
import DeleteUser from './DeleteUser';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
`;
const ListItem = styled.li``;

export default ({
  users,
  open,
  handleOpenModal,
  handleCloseModal,
  handleDeleteUser,
}) => {
  if (users.length === 0) {
    return (
      <List>
        <ListItem>No Users</ListItem>
      </List>
    );
  } else {
    return (
      <div>
        <List>
          {users.map(user => (
            <UserListItem
              key={user.id}
              name={user.name}
              password={user.password}
              email={user.email}
              id={user.id}
              handleOpenModal={() => handleOpenModal(user.id)}
            />
          ))}
        </List>
        <DeleteUser
          open={open}
          handleCloseModal={handleCloseModal}
          handleDeleteUser={handleDeleteUser}
        />
      </div>
    );
  }
};
