import { combineReducers } from "redux";
import favoritesReducer from "./favoriteReducer";
import productComReducer from './productComReducer';

export default combineReducers({    
    favorite: favoritesReducer,
    productCom: productComReducer
})