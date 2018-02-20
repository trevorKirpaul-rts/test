const defaultState = {
  all: [],
  loading: false,
  error: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'USER:CREATE':
      return {
        ...state,
        loading: true,
        error: false,
      };
    case 'USER:CREATE_SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
        profile: action.user,
      };
    case 'USER:CREATE_FAIL':
      return {
        ...state,
        loading: false,
        error: true,
      };
    case 'USERS:START_FETCH:ALL':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    case 'USER:START_FETCH:ONE':
      return {
        ...state,
        loading: action.error,
        error: action.error,
      };
    case 'USERS:FETCH_SUCCESS':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
        all: [...action.users],
      };
    case 'USER:FETCH_SUCCESS':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
        singleUser: action.data,
      };
    case 'USERS:FETCH_FAIL':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    case 'USER:FETCH_FAIL':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    default:
      return state;
  }
};
