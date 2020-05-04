import { EVENT } from "../actionTypes";

const initialState = {
  events: [],
  getPending: false,
  getError: undefined,
  getAllPending: false,
  getAllError: undefined,
  patchPending: false,
  patchError: undefined,
  deletePending: false,
  deleteError: undefined,
  createPending: false,
  createError: undefined,
};

const event = (state = initialState, action) => {
  switch (action.type) {
    case EVENT.GET_REQUEST:
      return { ...state, getPending: true };
    case EVENT.GET_SUCCESS:
      return { ...state, getPending: false };
    case EVENT.GET_FAILURE:
      return { ...state, getPending: false, getError: action.payload };
    case EVENT.UPDATE: {
      const newState = { ...state, events: [...state.events] };
      const index = newState.events.findIndex(
        (event) => event._id === action.payload._id
      );
      if (index === -1) {
        newState.events.push(action.payload);
      } else {
        newState[index] = action.payload;
      }
      return newState;
    }
    case EVENT.GET_ALL_REQUEST:
      return { ...state, getAllPending: true };
    case EVENT.GET_ALL_SUCCESS:
      return { ...state, getAllPending: false, events: action.payload };
    case EVENT.GET_ALL_FAILURE:
      return { ...state, getAllPending: false, getAllError: action.payload };
    case EVENT.PATCH_REQUEST:
      return { ...state, patchPending: true };
    case EVENT.PATCH_SUCCESS:
      return { ...state, patchPending: false };
    case EVENT.PATCH_FAILURE:
      return { ...state, patchPending: false, patchError: action.payload };
    case EVENT.DELETE_REQUEST:
      return { ...state, deletePending: true };
    case EVENT.DELETE_SUCCESS: {
      return {
        ...state,
        deletePending: false,
        events: state.events.filter(
          (event) => event._id !== action.payload._id
        ),
      };
    }
    case EVENT.DELETE_FAILURE:
      return { ...state, deletePending: false, deleteError: action.payload };
    case EVENT.CREATE_REQUEST:
      return { ...state, createPending: true };
    case EVENT.CREATE_SUCCESS:
      return { ...state, createPending: false };
    case EVENT.CREATE_FAILURE:
      return { ...state, createPending: false, createError: action.payload };
    default:
      return state;
  }
};

export default event;
