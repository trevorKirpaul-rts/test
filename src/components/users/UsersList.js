import React from 'react';
import UserListItem from './UserListItem';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
`;
const ListItem = styled.li``;

export default ({ users }) => {
  if (users.length === 0) {
    return (
      <ListItem>
        <p>No Users</p>
      </ListItem>
    );
  } else {
    return (
      <List>
        {users.map(user => (
          <UserListItem
            key={user.id}
            name={user.name}
            password={user.password}
            email={user.email}
            id={user.id}
          />
        ))}
      </List>
    );
  }
};
