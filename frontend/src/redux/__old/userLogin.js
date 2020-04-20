import {USER_LOGIN_REQUESTED} from "../actionTypes";

export const userLogin = (email, password) => ({
    type: USER_LOGIN_REQUESTED,
    payload: {
        email,
        password
    }
});
