import {
BOOK_DETAIL_ID_REQUEST,
BOOK_DETAIL_ID_SUCCESS,
BOOK_DETAIL_ID_FAILURE,
} from "../../Types/types";
import axios from "axios";

export const bookDetailIdRequest = () => ({
type: BOOK_DETAIL_ID_REQUEST,
});

export const bookDetailIdSuccess = (data) => ({
type: BOOK_DETAIL_ID_SUCCESS,
data,
});

export const bookDetailIdFailure = (error) => ({
type: BOOK_DETAIL_ID_FAILURE,
error,
});

export const bookDetailId = (id) => (dispatch) => {

dispatch(bookDetailIdRequest());
const config = {
    headers: {
    Authorization: localStorage.getItem("userAccessToken"),
},
};

return axios
    // .get(`https://openlibrary.org/id/${id}.json`)
    .get(`https://openlibrary.org/works/${id}.json`)
    .then((data) => {
    console.log("data from action",data)
    dispatch(bookDetailIdSuccess(data));
    })
    .catch((error) => {
    dispatch(bookDetailIdFailure(error));
    });
};
