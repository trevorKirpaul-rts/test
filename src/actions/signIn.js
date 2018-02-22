export const signIn = ({ email, password }) => ({
  type: 'SIGN-IN:START',
  loading: true,
  error: false,
  creds: {
    email,
    password,
  },
});

export const signOut = () => ({
  type: 'SIGN-OUT',
  auth: false,
  loading: false,
  error: false,
});
