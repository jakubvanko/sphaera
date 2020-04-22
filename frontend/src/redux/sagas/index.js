import {all} from "redux-saga/effects";

import userSaga from "./user";
import eventSaga from "./event";
import cartSaga from "./cart";

export default function* rootSaga() {
    yield all([
        userSaga(),
        eventSaga(),
        cartSaga()
    ]);
}
