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
  loading: true,
  error: false,
});

export const tokenSignIn = token => ({
  type: 'SIGN-IN:TOKEN_START',
  loading: true,
  error: false,
  token,
});
