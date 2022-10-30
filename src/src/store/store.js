import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import productComReducer from './reducers/productComReducer';


const productStore = createStore(productComReducer,composeWithDevTools())

export default productStore