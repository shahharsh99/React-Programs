import {
AUTHOR_DETAIL_REQUEST,
AUTHOR_DETAIL_SUCCESS,
AUTHOR_DETAIL_FAILURE,
} from '../../Types/types';

const initialState = {
data: null,
error: null,
isLoading: false,
};

const AuthorDetail = (state = initialState, action) => {
switch (action.type) {
    case AUTHOR_DETAIL_REQUEST:
    return {
        ...state,
        isLoading: true,
    };
    case AUTHOR_DETAIL_SUCCESS:
    return {
        ...state,
        isLoading: false,
        data: action.data.data,
        error: null,
    };
    case AUTHOR_DETAIL_FAILURE:
    return {
        ...state,
        isLoading: false,
        data: null,
        error: action.error.response,
    };
    default:
    return state;
}
};

export default AuthorDetail;
