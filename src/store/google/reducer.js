import {
    GET_GOOGLE_LIST,
    API_RESPONSE_SUCCESS,
    API_RESPONSE_ERROR,
} from "./actionType";

const INIT_STATE = {
    googleList: [],
};

const Googler = (state = INIT_STATE, action) => {
    switch (action.type) {
        case API_RESPONSE_SUCCESS:
            switch (action.payload.actionType) {
                case GET_GOOGLE_LIST:
                    return {
                        ...state,
                        googleList: action.payload.data,
                        isGoogleCreated: false,
                        isGoogleSuccess: true
                    };

                default:
                    return { ...state };
            }

        case API_RESPONSE_ERROR:
            switch (action.payload.actionType) {
                case GET_GOOGLE_LIST:
                    return {
                        ...state,
                        error: action.payload.error,
                        isGoogleCreated: false,
                        isGoogleSuccess: true
                    };

                default:
                    return { ...state };
            }

        case GET_GOOGLE_LIST: {
            return {
                ...state,
                isGoogleCreated: false
            };
        }
        default:
            return { ...state };
    }
};

export default Googler;