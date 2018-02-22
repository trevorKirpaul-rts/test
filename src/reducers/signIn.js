const defaultState = {
  auth: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SIGN-IN:TOKEN_START':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    case 'SIGN-IN:START':
      return {
        ...state,
        loading: action.loading,
        error: action.loading,
      };
    case 'SIGN-IN:SUCCESS':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
        user: action.user,
        auth: action.auth,
      };
    case 'SIGN-IN:FAIL':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
        user: action.user,
        auth: action.auth,
      };
    case 'SIGN-OUT':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    case 'SIGN-OUT:SUCCESS':
      return {
        loading: action.loading,
        auth: action.auth,
        user: action.user,
        error: action.error,
      };
    default:
      return state;
  }
};
