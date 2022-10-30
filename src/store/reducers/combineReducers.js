import { combineReducers } from "redux";
import compareReducer from "./compareReducer";
import productComReducer from "./productComReducer";


export default combineReducers({
    compareReducer,
    productComReducer
})