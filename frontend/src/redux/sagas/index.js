import {all} from "redux-saga/effects";

import {watchCurrentUserDataRequest, watchLogin} from "./user";


export default function* rootSaga() {
    yield all([
        watchLogin(),
        watchCurrentUserDataRequest()
    ])
}
