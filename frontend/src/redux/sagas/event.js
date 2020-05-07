import { all, put, call, takeLatest, takeEvery } from "redux-saga/effects";

import { EVENT } from "../actionTypes";
import { eventApi } from "../../scripts/api";

function* getRequest({ payload }) {
  try {
    const event = yield call(eventApi.getById, payload._id);
    event.date = new Date(event.date);
    event.image = "https://sphaera.jakubvanko.com/api/uploads/" + event.image;
    yield all([
      put({
        type: EVENT.GET_SUCCESS,
      }),
      put({
        type: EVENT.UPDATE,
        payload: event,
      }),
    ]);
  } catch (e) {
    yield put({
      type: EVENT.GET_FAILURE,
      payload: e,
    });
  }
}

function* getAllRequest() {
  try {
    const events = yield call(eventApi.getAll);
    events.forEach((event) => {
      event.date = new Date(event.date);
      event.image = "https://sphaera.jakubvanko.com/api/uploads/" + event.image;
    });
    yield put({
      type: EVENT.GET_ALL_SUCCESS,
      payload: events,
    });
  } catch (e) {
    yield put({
      type: EVENT.GET_ALL_FAILURE,
      payload: e,
    });
  }
}

function* patchRequest({ payload }) {
  try {
    const event = yield call(eventApi.updateById, payload._id, payload);
    yield all([
      put({
        type: EVENT.PATCH_SUCCESS,
      }),
      put({
        type: EVENT.UPDATE,
        payload: event,
      }),
    ]);
  } catch (e) {
    yield put({
      type: EVENT.PATCH_FAILURE,
      payload: e,
    });
  }
}

function* deleteRequest({ payload }) {
  try {
    const _id = yield call(eventApi.deleteById, payload._id);
    yield put({
      type: EVENT.DELETE_SUCCESS,
      payload: {
        _id,
      },
    });
  } catch (e) {
    yield put({
      type: EVENT.DELETE_FAILURE,
      payload: e,
    });
  }
}

function* createRequest({ payload }) {
  try {
    const { artist, date, imageFile, areas } = payload;
    const event = yield call(eventApi.create, artist, date, imageFile, areas);
    yield all([
      put({
        type: EVENT.CREATE_SUCCESS,
      }),
      put({
        type: EVENT.UPDATE,
        payload: event,
      }),
    ]);
  } catch (e) {
    yield put({
      type: EVENT.CREATE_FAILURE,
      payload: e,
    });
  }
}

function* getTicketRequest({ payload }) {
  try {
    yield call(eventApi.getTicket, payload);
    yield put({
      type: EVENT.GET_TICKET_SUCCESS,
    });
  } catch (e) {
    yield put({
      type: EVENT.GET_TICKET_FAILURE,
      payload: e,
    });
  }
}

function* eventSaga() {
  yield all([
    takeEvery(EVENT.GET_REQUEST, getRequest),
    takeLatest(EVENT.GET_ALL_REQUEST, getAllRequest),
    takeEvery(EVENT.PATCH_REQUEST, patchRequest),
    takeEvery(EVENT.DELETE_REQUEST, deleteRequest),
    takeEvery(EVENT.CREATE_REQUEST, createRequest),
    takeEvery(EVENT.GET_TICKET_REQUEST, getTicketRequest),
  ]);
}

export default eventSaga;
