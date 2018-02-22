const defaultState = {
  auth: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
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
        auth: action.auth,
        loading: action.loading,
        error: action.error,
      };
    default:
      return state;
  }
};
