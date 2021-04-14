import {
BOOK_DETAIL_ID_REQUEST,
BOOK_DETAIL_ID_SUCCESS,
BOOK_DETAIL_ID_FAILURE,
} from '../../Types/types';

const initialState = {
data: null,
error: null,
isLoading: false,
};

const BookDetailIdReducer = (state = initialState, action) => {
switch (action.type) {
    case BOOK_DETAIL_ID_REQUEST:
    return {
        ...state,
        isLoading: true,
    };
    case BOOK_DETAIL_ID_SUCCESS:
    return {
        ...state,
        isLoading: false,
        data: action.data.data,
        error: null,
    };
    case BOOK_DETAIL_ID_FAILURE:
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

export default BookDetailIdReducer;
