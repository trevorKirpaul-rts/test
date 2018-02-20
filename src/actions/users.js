export const createUser = (name, password, email) => ({
  type: 'USER:CREATE',
  user: {
    name,
    password,
    email,
  },
});

export const patchUser = (name, password, email) => ({
  type: 'USER:EDIT',
  user: {
    name,
    password,
    email,
  },
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
