import {
    GET_YOUTUBE_LIST,
    API_RESPONSE_SUCCESS,
    API_RESPONSE_ERROR,
} from "./actionType";

const INIT_STATE = {
    youtubeList: [],
};

const YoutubeR = (state = INIT_STATE, action) => {
    switch (action.type) {
        case API_RESPONSE_SUCCESS:
            switch (action.payload.actionType) {
                case GET_YOUTUBE_LIST:
                    return {
                        ...state,
                        youtubeList: action.payload.data,
                        isYoutubeCreated: false,
                        isYoutubeSuccess: true
                    };

                default:
                    return { ...state };
            }

        case API_RESPONSE_ERROR:
            switch (action.payload.actionType) {
                case GET_YOUTUBE_LIST:
                    return {
                        ...state,
                        error: action.payload.error,
                        isYoutubeCreated: false,
                        isYoutubeSuccess: true
                    };

                default:
                    return { ...state };
            }

        case GET_YOUTUBE_LIST: {
            return {
                ...state,
                isYoutubeCreated: false
            };
        }
        default:
            return { ...state };
    }
};

export default YoutubeR;