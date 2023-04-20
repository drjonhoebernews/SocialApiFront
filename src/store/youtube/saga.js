import { call, put, takeEvery, all, fork } from "redux-saga/effects";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Task Redux States
import {
    GET_YOUTUBE_LIST,
} from "./actionType";
import {
    YoutubeApiResponseSuccess,
    YoutubeApiResponseError,
} from "./action";

//Include Both Helper File with needed methods
import {
    getYoutubeList as getYoutubeListApi,
}
    from "../../helpers/fakebackend_helper";

function* getYoutubeList() {
    try {
        const response = yield call(getYoutubeListApi);
        yield put(YoutubeApiResponseSuccess(GET_YOUTUBE_LIST, response));
    } catch (error) {
        yield put(YoutubeApiResponseError(GET_YOUTUBE_LIST, error));
    }
}

export function* watchGetYoutubeList() {
    yield takeEvery(GET_YOUTUBE_LIST, getYoutubeList);
}

function* youtubeSaga() {
    yield all([
        fork(watchGetYoutubeList),
    ]
    );
}

export default youtubeSaga;
