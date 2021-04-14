import {
BOOK_DETAIL_REQUEST,
BOOK_DETAIL_SUCCESS,
BOOK_DETAIL_FAILURE,
} from "../../Types/types";
import axios from "axios";

export const bookDetailRequest = () => ({
type: BOOK_DETAIL_REQUEST,
});

export const bookDetailSuccess = (data) => ({
type: BOOK_DETAIL_SUCCESS,
data,
});

export const bookDetailFailure = (error) => ({
type: BOOK_DETAIL_FAILURE,
error,
});

export const bookDetail = (id) => (dispatch) => {

dispatch(bookDetailRequest());
const config = {
    headers: {
    Authorization: localStorage.getItem("userAccessToken"),
},
};

return axios
    .get(`https://openlibrary.org/ia/${id}.json`)
    // .get(`https://openlibrary.org/works/${id}.json`)
    .then((data) => {
    console.log("data from action",data)
    dispatch(bookDetailSuccess(data));
    })
    .catch((error) => {
    dispatch(bookDetailFailure(error));
    });
};
