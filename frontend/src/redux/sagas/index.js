import { all, fork, put } from "redux-saga/effects";

import userSaga from "./user";
import eventSaga from "./event";
import cartSaga from "./cart";
import { EVENT, USER } from "../actionTypes";

function* setupSaga() {
  // will run exactly once on startup
  yield put({
    type: EVENT.GET_ALL_REQUEST,
  });
  if (localStorage.getItem("token") !== null) {
    yield put({
      type: USER.GET_REQUEST,
      meta: {
        current: true,
      },
    });
  }
}

export default function* rootSaga() {
  yield all([fork(userSaga), fork(eventSaga), fork(cartSaga), fork(setupSaga)]);
}
