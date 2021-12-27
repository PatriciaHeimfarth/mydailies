import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import dailiesReducer from "./dailiesReducer";

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    dailies: dailiesReducer
});