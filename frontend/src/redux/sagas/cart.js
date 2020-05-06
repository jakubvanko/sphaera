import { all, put, call, takeLatest } from "redux-saga/effects";

import { CART, USER, EVENT } from "../actionTypes";
import { eventApi } from "../../scripts/api";

function* buyRequest({ payload }) {
  try {
    for (const item of payload) {
      yield call(eventApi.buyTicket, item._id, item.area);
    }
    yield all([
      put({
        type: CART.BUY_SUCCESS,
      }),
      put({
        type: USER.GET_REQUEST,
        meta: {
          current: true,
        },
      }),
      put({
        type: EVENT.GET_ALL_REQUEST,
      }),
    ]);
  } catch (e) {
    yield put({
      type: CART.BUY_FAILURE,
      payload: e,
    });
  }
}

function* cartSaga() {
  yield all([takeLatest(CART.BUY_REQUEST, buyRequest)]);
}

export default cartSaga;
