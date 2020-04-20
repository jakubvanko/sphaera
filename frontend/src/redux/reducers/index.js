import {combineReducers} from "redux";

import userReducer from "./user";
import eventReducer from "./event";
import cartReducer from "./cart";

export default combineReducers({
    user: userReducer,
    event: eventReducer,
    cart: cartReducer
})
