import {
BOOK_SEARCH_REQUEST,
BOOK_SEARCH_SUCCESS,
BOOK_SEARCH_FAILURE,
} from "../../Types/types";
import axios from "axios";

export const bookSearchRequest = () => ({
type: BOOK_SEARCH_REQUEST,
});

export const bookSearchSuccess = (data) => ({
type: BOOK_SEARCH_SUCCESS,
data,
});

export const bookSearchFailure = (error) => ({
type: BOOK_SEARCH_FAILURE,
error,
});

export const bookSearch = (value) => (dispatch) => {

dispatch(bookSearchRequest());
const config = {
    headers: {
    Authorization: localStorage.getItem("userAccessToken"),
},
};

return axios
    .get(`https://openlibrary.org/search.json?title=${value}&limit=20&offset=0`)
    .then((data) => {
    console.log("data from action",data)
    dispatch(bookSearchSuccess(data));
    })
    .catch((error) => {
    dispatch(bookSearchFailure(error));
    });
};
