import {USER_LOGIN} from "../actionTypes";

const userLogin = (email, password) => ({
    type: USER_LOGIN,
    payload: {
        email,
        password
    }
});
