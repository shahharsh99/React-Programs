import { combineReducers } from "redux";
import bookDetail from "../Components/OpenLibrary/bookDetail";
import BookDetailReducer from "./openLibrary/bookDetail";
import AuthorDetailReducer from "./openLibrary/authorDetail";
import BookSearchReducer from "./openLibrary/bookSearch";

const rootReducer = combineReducers({
    
    bookSearch : BookSearchReducer,
    bookDetail : BookDetailReducer,
    authorDetail : AuthorDetailReducer
});

export default rootReducer;
