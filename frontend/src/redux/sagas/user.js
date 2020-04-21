import {all, call, put, takeLatest} from "redux-saga/effects";

import {USER} from "../actionTypes";
import {userApi} from "../../scripts/api";


function* loginRequest({payload}) {
    try {
        const {email, password} = payload;
        const token = yield call(userApi.login, email, password);
        localStorage.setItem("token", token);
        yield all([
            put({
                type: USER.LOGIN_SUCCESS
            }),
            put({
                type: USER.GET_REQUEST,
                payload: {
                    _id: "current"
                },
                meta: {
                    current: true
                }
            })
        ]);
    } catch (e) {
        yield put({
            type: USER.LOGIN_FAILURE
        })
    }
}









function* userSaga() {
    yield all([
        takeLatest(USER.LOGIN_REQUEST, loginRequest)
    ])
}

export default userSaga;
