import {USER} from "../actionTypes";

export const loginRequest = (email, password) => {
    return {
        type: USER.LOGIN_REQUEST,
        payload: {
            email,
            password
        }
    }
};

export const logout = () => ({type: USER.LOGOUT});
