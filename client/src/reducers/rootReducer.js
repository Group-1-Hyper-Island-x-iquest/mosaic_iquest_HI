import { combineReducers } from "redux";
import { connectionReducer } from "./connectionReducer";
import { modalReducer } from "./modalReducer";

const rootReducer = combineReducers({ connection: connectionReducer, modal: modalReducer });

export default rootReducer;
