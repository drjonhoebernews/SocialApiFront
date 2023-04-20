import { call, put, takeEvery, all, fork } from "redux-saga/effects";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Task Redux States
import {
    GET_GOOGLE_LIST,
} from "./actionType";
import {
    GoogleApiResponseSuccess,
    GoogleApiResponseError,
} from "./action";

//Include Both Helper File with needed methods
import {
    getGoogleList as getGoogleListApi,
}
    from "../../helpers/fakebackend_helper";

function* getGoogleList() {
    try {
        const response = yield call(getGoogleListApi);
        yield put(GoogleApiResponseSuccess(GET_GOOGLE_LIST, response));
    } catch (error) {
        yield put(GoogleApiResponseError(GET_GOOGLE_LIST, error));
    }
}

export function* watchGetGoogleList() {
    yield takeEvery(GET_GOOGLE_LIST, getGoogleList);
}

function* googleSaga() {
    yield all([
        fork(watchGetGoogleList),
    ]
    );
}

export default googleSaga;
