import { USER } from "../actionTypes";

const initialState = {
  current: {
    _id: undefined,
    admin: false,
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    funds: undefined,
    tickets: undefined,
  },
  users: [],
  loginPending: false,
  loginError: undefined,
  getPending: false,
  getError: undefined,
  patchPending: false,
  patchError: undefined,
  deletePending: false,
  deleteError: undefined,
  registerPending: false,
  registerError: undefined,
  registerSuccess: undefined,
  resetPasswordPending: false,
  resetPasswordError: undefined,
  resetPasswordSuccess: undefined,
};

const user = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case USER.LOGIN_REQUEST:
      return { ...state, loginPending: true };
    case USER.LOGIN_SUCCESS:
      return { ...state, loginPending: false };
    case USER.LOGIN_FAILURE:
      return { ...state, loginPending: false, loginError: action.payload };
    case USER.LOGOUT:
      localStorage.removeItem("token");
      return initialState;
    case USER.UPDATE:
      const newState = { ...state, users: [...state.users] };
      if (action.meta.current === true) {
        newState.current = { ...state.current, ...action.payload };
      }
      const index = newState.users.findIndex(
        (user) => user._id === action.payload._id
      );
      if (index === -1) {
        newState.users.push(action.payload);
      } else {
        newState[index] = action.payload;
      }
      return newState;
    case USER.GET_REQUEST:
      return { ...state, getPending: true };
    case USER.GET_SUCCESS:
      return { ...state, getPending: false };
    case USER.GET_FAILURE:
      return { ...state, getPending: false, getError: action.payload };
    case USER.PATCH_REQUEST:
      return { ...state, patchPending: true };
    case USER.PATCH_SUCCESS:
      return { ...state, patchPending: false };
    case USER.PATCH_FAILURE:
      return { ...state, patchPending: false, patchError: action.payload };
    case USER.DELETE_REQUEST:
      return { ...state, deletePending: true };
    case USER.DELETE_SUCCESS: {
      if (
        action.meta.current === true &&
        action.payload._id === state.current._id
      ) {
        return initialState;
      }
      return {
        ...state,
        deletePending: false,
        users: state.users.filter((user) => user._id !== action.payload._id),
      };
    }
    case USER.DELETE_FAILURE:
      return { ...state, deletePending: false, deleteError: action.payload };
    case USER.REGISTER_REQUEST:
      return { ...state, registerPending: true };
    case USER.REGISTER_SUCCESS:
      return { ...state, registerPending: false, registerSuccess: true };
    case USER.REGISTER_FAILURE:
      return {
        ...state,
        registerPending: false,
        registerError: action.payload,
      };
    case USER.RESET_PASSWORD_REQUEST:
      return { ...state, resetPasswordPending: true };
    case USER.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPasswordPending: false,
        resetPasswordSuccess: true,
      };
    case USER.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        resetPasswordPending: false,
        resetPasswordError: action.payload,
      };
    case USER.RESET_RESULTS:
      return {
        ...initialState,
        current: state.current,
        users: state.users,
      };
    default:
      return state;
  }
};

export default user;
