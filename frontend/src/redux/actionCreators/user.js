import { USER } from "../actionTypes";

export const loginRequest = (email, password) => ({
  type: USER.LOGIN_REQUEST,
  payload: {
    email,
    password,
  },
});

export const logout = () => ({ type: USER.LOGOUT });
