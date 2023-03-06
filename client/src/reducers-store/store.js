import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/rootReducer";

//configureStore is a pre-set function by the Redux Toolkit.

const store = configureStore({
  reducer: rootReducer,
});

export default store; //the store object can be used in the app to dispatch actions and
//retrieve the current state from the Redux store.
