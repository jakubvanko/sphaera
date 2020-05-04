import { combineReducers } from "redux";

import cartReducer from "./cart";
import eventReducer from "./event";
import userReducer from "./user";

export default combineReducers({
  user: userReducer,
  event: eventReducer,
  cart: cartReducer,
});
