import { combineReducers } from "redux";
import BookDetailIdReducer from "./openLibrary/bookDetailId";
import BookDetailIaReducer from "./openLibrary/bookDetailIa";
import AuthorDetailReducer from "./openLibrary/authorDetail";
import BookSearchReducer from "./openLibrary/bookSearch";

const rootReducer = combineReducers({
    
    bookSearch : BookSearchReducer,
    bookDetailId : BookDetailIdReducer,
    bookDetailIa : BookDetailIaReducer,
    authorDetail : AuthorDetailReducer
});

export default rootReducer;
