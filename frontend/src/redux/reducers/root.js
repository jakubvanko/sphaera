import {USER_LOGIN_SUCCEEDED} from "../actionTypes";

const initialState = {
    user: null,
    token: null
};

const root = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_SUCCEEDED:
            return;
        default:
            return;
    }
};

export default root;
