import {takeLatest, call, put, all} from "redux-saga/effects";

import {
    USER_LOGIN_REQUESTED,
    USER_LOGIN_SUCCEEDED,
    USER_LOGIN_FAILED,
    USER_CURRENT_DATA_SUCCEEDED, USER_CURRENT_DATA_FAILED, USER_CURRENT_DATA_REQUESTED
} from "../actionTypes";
import {loginUser, getUser} from "../../scripts/api";

function* loginRequested({payload}) {
    try {
        const {email, password} = payload;
        const token = yield call(loginUser, email, password);
        localStorage.setItem("token", token);
        yield all([put({
            type: USER_LOGIN_SUCCEEDED
        }),
            put({
                type: USER_CURRENT_DATA_REQUESTED
            })])
    } catch (e) {
        yield put({
            type: USER_LOGIN_FAILED
        })
    }
}

export function* watchLogin() {
    yield takeLatest(USER_LOGIN_REQUESTED, loginRequested)
}

function* userCurrentDataRequested() {
    try {
        const userData = yield call(getUser);
        yield put({
            type: USER_CURRENT_DATA_SUCCEEDED,
            payload: userData
        })
    } catch (e) {
        yield put({
            type: USER_CURRENT_DATA_FAILED
        })
    }
}

export function* watchCurrentUserDataRequest() {
    yield takeLatest(USER_CURRENT_DATA_REQUESTED, userCurrentDataRequested)
}
