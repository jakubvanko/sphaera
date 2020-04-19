import {USER_LOGIN} from "../actionTypes";

const initialState = {
    user: null,
    token: null
};

const root = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return;
        default:
            return;
    }
};

export default root;
