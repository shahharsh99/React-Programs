import {
BOOK_DETAIL_IA_REQUEST,
BOOK_DETAIL_IA_SUCCESS,
BOOK_DETAIL_IA_FAILURE,
} from "../../Types/types";
import axios from "axios";

export const bookDetailIaRequest = () => ({
type: BOOK_DETAIL_IA_REQUEST,
});

export const bookDetailIaSuccess = (data) => ({
type: BOOK_DETAIL_IA_SUCCESS,
data,
});

export const bookDetailIaFailure = (error) => ({
type: BOOK_DETAIL_IA_FAILURE,
error,
});

export const bookDetailIa = (ia) => (dispatch) => {

dispatch(bookDetailIaRequest());
const config = {
    headers: {
    Authorization: localStorage.getItem("userAccessToken"),
},
};

return axios
    .get(`https://openlibrary.org/ia/${ia}.json`)
    // .get(`https://openlibrary.org/works/${id}.json`)
    .then((data) => {
    console.log("data from action",data)
    dispatch(bookDetailIaSuccess(data));
    })
    .catch((error) => {
    dispatch(bookDetailIaFailure(error));
    });
};
