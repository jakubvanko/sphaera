import {
    USER_CURRENT_DATA_FAILED,
    USER_CURRENT_DATA_SUCCEEDED,
    USER_LOGIN_FAILED,
    USER_LOGIN_SUCCEEDED
} from "../actionTypes";

const initialState = {
    user: null,
    loginStatus: null
};

const root = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case USER_LOGIN_SUCCEEDED:
            return {...state, loginStatus: true};
        case USER_LOGIN_FAILED:
            return {...state, loginStatus: false};
        case USER_CURRENT_DATA_SUCCEEDED:
            return;
        case USER_CURRENT_DATA_FAILED:
            return;
        default:
            return;
    }
};

export default root;
