import { USER } from "../actionTypes";

export const loginRequest = (email, password) => ({
  type: USER.LOGIN_REQUEST,
  payload: {
    email,
    password,
  },
});

export const logout = () => ({ type: USER.LOGOUT });

export const registerRequest = (firstName, lastName, email, password) => ({
  type: USER.REGISTER_REQUEST,
  payload: {
    firstName,
    lastName,
    email,
    password,
  },
});

export const resetPasswordRequest = (email) => ({
  type: USER.RESET_PASSWORD_REQUEST,
  payload: {
    email,
  },
});

export const resetResults = () => ({
  type: USER.RESET_RESULTS,
});

export const tokenLogin = (token) => ({
  type: USER.TOKEN_LOGIN_REQUEST,
  payload: token,
});

export const patchCurrentRequest = ({
  firstName,
  lastName,
  email,
  password,
}) => {
  const payload = {};
  if (firstName) payload.firstName = firstName;
  if (lastName) payload.lastName = lastName;
  if (email) payload.email = email;
  if (password) payload.password = password;

  return {
    type: USER.PATCH_REQUEST,
    payload,
    meta: {
      current: true,
    },
  };
};
