import {all, call, put, takeLatest, takeEvery} from "redux-saga/effects";

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
                meta: {
                    current: true
                }
            })
        ]);
    } catch (e) {
        yield put({
            type: USER.LOGIN_FAILURE,
            payload: e
        });
    }
}

function* getRequest({payload, meta}) {
    try {
        const user = meta.current === true ?
            yield call(userApi.getById, "current") :
            yield call(userApi.getById, payload._id);
        yield all([
            put({
                type: USER.GET_SUCCESS
            }),
            put({
                type: USER.UPDATE,
                payload: user,
                meta
            })
        ]);
    } catch (e) {
        yield put({
            type: USER.GET_FAILURE,
            payload: e
        });
    }
}

function* patchRequest({payload, meta}) {   // TODO: RESET PASSWORD ?
    try {
        const user = meta.current === true ?
            yield call(userApi.updateById, "current", payload) :
            yield call(userApi.updateById, payload._id, payload);
        yield all([
            put({
                type: USER.PATCH_SUCCESS
            }),
            put({
                type: USER.UPDATE,
                payload: user,
                meta
            })
        ]);
    } catch (e) {
        yield put({
            type: USER.PATCH_FAILURE,
            payload: e
        });
    }
}

function* deleteRequest({payload, meta}) {
    try {
        const _id = meta.current === true ?
            yield call(userApi.deleteById, "current") :
            yield call(userApi.deleteById, payload._id);
        yield put({
            type: USER.DELETE_SUCCESS,
            payload: {
                _id
            },
            meta
        });
    } catch (e) {
        yield put({
            type: USER.DELETE_FAILURE,
            payload: e
        });
    }
}

function* registerRequest({payload}) {
    try {
        const {firstName, lastName, email, password} = payload;
        yield call(userApi.register, firstName, lastName, email, password);
        yield put({
            type: USER.REGISTER_SUCCESS
        });
    } catch (e) {
        yield put({
            type: USER.REGISTER_FAILURE,
            payload: e
        });
    }
}


function* userSaga() {
    yield all([
        takeLatest(USER.LOGIN_REQUEST, loginRequest),
        takeEvery(USER.GET_REQUEST, getRequest),
        takeEvery(USER.PATCH_REQUEST, patchRequest),
        takeEvery(USER.DELETE_REQUEST, deleteRequest),
        takeLatest(USER.REGISTER_REQUEST, registerRequest)
    ]);
}

export default userSaga;
