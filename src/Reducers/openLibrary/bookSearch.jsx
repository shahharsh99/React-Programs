import {
BOOK_SEARCH_REQUEST,
BOOK_SEARCH_SUCCESS,
BOOK_SEARCH_FAILURE,
} from '../../Types/types';

const initialState = {
data: null,
error: null,
isLoading: false,
};

const BookSearchReducer = (state = initialState, action) => {
switch (action.type) {
    case BOOK_SEARCH_REQUEST:
    return {
        ...state,
        isLoading: true,
    };
    case BOOK_SEARCH_SUCCESS:
    return {
        ...state,
        isLoading: false,
        data: action.data.data,
        error: null,
    };
    case BOOK_SEARCH_FAILURE:
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

export default BookSearchReducer;
