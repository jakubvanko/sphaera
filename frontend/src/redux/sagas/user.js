import {takeLatest, call, put} from "redux-saga/effects";

import {USER_LOGIN_REQUESTED, USER_LOGIN_SUCCEEDED, USER_LOGIN_FAILED} from "../actionTypes";
import {loginUser} from "../../scripts/api";

function* login({payload}) {
    try {
        const {email, password} = payload;
        console.log("START " + email + " " + password);
        const token = yield call(loginUser, email, password);
        localStorage.setItem("token", token);
        console.log("LOGIN SUCCESS: " + token);
        yield put({
            type: USER_LOGIN_SUCCEEDED
        });
    } catch (e) {
        yield put({
            type: USER_LOGIN_FAILED
        })
    }
}

export function* watchLogin() {
    yield takeLatest(USER_LOGIN_REQUESTED, login)
}
