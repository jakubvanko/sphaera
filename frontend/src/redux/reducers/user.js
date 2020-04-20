import {USER} from "../actionTypes";

const initialState = {
    current: {
        _id: undefined,
        admin: false,
        firstName: undefined,
        lastName: undefined,
        email: undefined,
        funds: undefined,
        tickets: undefined
    },
    users: [],
    loginPending: false,
    loginError: undefined,
    updatePending: false,
    updateError: undefined,
    deletePending: false,
    deleteError: undefined,
    registerPending: false,
    registerError: undefined,
    registerSuccess: undefined
};

const root = (state = initialState, action) => {
    switch (action.type) {
        case USER.LOGIN_REQUEST:
            return {...state, loginPending: true};
        case USER.LOGIN_SUCCESS:
            return {...state, loginPending: false, current: action.payload};
        case USER.LOGIN_FAILURE:
            return {...state, loginPending: false, loginError: action.payload};
        case USER.LOGOUT_REQUEST:
            return initialState;
        case USER.UPDATE_REQUEST:
            return {...state, updatePending: true};
        case USER.UPDATE_SUCCESS: {
            const newState = {...state, updatePending: false};
            if (action.payload._id === state.current._id) {
                newState.current = action.payload;
            } else {
                newState.users = state.users.map((user) => user._id === action.payload._id ? action.payload : user);
            }
            return newState;
        }
        case USER.UPDATE_FAILURE:
            return {...state, updatePending: false, updateError: action.payload};
        case USER.DELETE_REQUEST:
            return {...state, deletePending: true};
        case USER.DELETE_SUCCESS: {
            if (action.payload._id === state.current._id) return initialState;
            return {
                ...state,
                deletePending: false,
                users: state.users.filter((user) => user._id !== action.payload._id)
            };
        }
        case USER.DELETE_FAILURE:
            return {...state, deletePending: false, deleteError: action.payload};
        case USER.REGISTER_REQUEST:
            return {...state, registerPending: true};
        case USER.REGISTER_SUCCESS:
            return {...state, registerPending: false, registerSuccess: true, current: action.payload};
        case USER.REGISTER_FAILURE:
            return {...state, registerPending: false, registerError: action.payload};
        default:
            return state;
    }
};

export default root;
