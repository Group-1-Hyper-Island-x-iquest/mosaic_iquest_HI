import { combineReducers } from "redux";
import { connectionReducer } from "./connectionReducer";
import { modalReducer } from "./modalReducer";

<<<<<<< HEAD
//The combineReducers function from the redux library is used to combine multiple reducers
// into a single root reducer. In this case, there is only one reducer
//called connectionReducer, which is imported from the connectionReducer.js file.

const rootReducer = combineReducers({
  connection: connectionReducer,
});
=======
const rootReducer = combineReducers({ connection: connectionReducer, modal: modalReducer });
>>>>>>> a52083f987cae8eb6c80dd2478827dfadd279dbf

export default rootReducer;
