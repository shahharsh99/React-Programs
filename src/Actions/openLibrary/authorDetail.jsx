import {
AUTHOR_DETAIL_REQUEST,
AUTHOR_DETAIL_SUCCESS,
AUTHOR_DETAIL_FAILURE,
} from "../../Types/types";
import axios from "axios";

export const authorDetailRequest = () => ({
type: AUTHOR_DETAIL_REQUEST,
});

export const authorDetailSuccess = (data) => ({
type: AUTHOR_DETAIL_SUCCESS,
data,
});

export const authorDetailFailure = (error) => ({
type: AUTHOR_DETAIL_FAILURE,
error,
});

export const authorDetail = (id) => (dispatch) => {

dispatch(authorDetailRequest());
const config = {
    headers: {
    Authorization: localStorage.getItem("userAccessToken"),
},
};

return axios
    .get(`https://openlibrary.org${id}.json`)
    .then((data) => {
    console.log("data from action",data)
    dispatch(authorDetailSuccess(data));
    })
    .catch((error) => {
    dispatch(authorDetailFailure(error));
    });
};
