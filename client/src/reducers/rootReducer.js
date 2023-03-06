import { combineReducers } from "redux";
import { connectionReducer } from "./connectionReducer";

//The combineReducers function from the redux library is used to combine multiple reducers
// into a single root reducer. In this case, there is only one reducer
//called connectionReducer, which is imported from the connectionReducer.js file.

const rootReducer = combineReducers({
  connection: connectionReducer,
});

export default rootReducer;
