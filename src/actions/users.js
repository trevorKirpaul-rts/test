export const createUser = (name, password, email) => ({
  type: 'USER:CREATE',
  user: {
    name,
    password,
    email,
  },
});

export const patchUser = ({ name, password, email, id }) => ({
  type: 'USER:EDIT',
  user: {
    name,
    password,
    email,
  },
  id,
});

export const getUser = id => ({
  type: 'USER:START_FETCH:ONE',
  loading: true,
  error: false,
  id,
});

export const getUsers = () => ({
  type: 'USERS:START_FETCH:ALL',
  loading: true,
  error: false,
});

export const deleteUser = id => ({
  type: 'USER:DELETE',
  loading: true,
  error: false,
  id,
  deletedUser: false,
});

// dispatch to clear 'deletedUser' status from 204 to 'reset
export const resetDeleteCheck = () => ({
  type: 'USER:RESET_DELETE_CHECK',
  deletedUser: 'reset',
});
