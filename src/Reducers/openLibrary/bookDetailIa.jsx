import {
BOOK_DETAIL_IA_REQUEST,
BOOK_DETAIL_IA_SUCCESS,
BOOK_DETAIL_IA_FAILURE,
} from '../../Types/types';

const initialState = {
data: null,
error: null,
isLoading: false,
};

const BookDetailIaReducer = (state = initialState, action) => {
switch (action.type) {
    case BOOK_DETAIL_IA_REQUEST:
    return {
        ...state,
        isLoading: true,
    };
    case BOOK_DETAIL_IA_SUCCESS:
    return {
        ...state,
        isLoading: false,
        data: action.data.data,
        error: null,
    };
    case BOOK_DETAIL_IA_FAILURE:
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

export default BookDetailIaReducer;
