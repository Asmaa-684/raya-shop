import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import combineReducers from "./reducers/combineReducers";



const productStore = createStore(combineReducers,composeWithDevTools())

export default productStore