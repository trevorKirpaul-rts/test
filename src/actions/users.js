export const createUser = (name, password) => ({
  type: 'USER:CREATE',
  user: {
    name,
    password
  }
})

export const getUsers = () => ({
  type: 'USERS:START_FETCH:ALL',
  loading: true,
  error: false
})