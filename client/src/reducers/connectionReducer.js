import { CONNECTION_ACTION_TYPES } from "../reducers-actions/connectionActions";

export const connectionReducer = (state = null, action) => {
  switch (action.type) {
    case CONNECTION_ACTION_TYPES.LOAD_ALL_CONNECTIONS:
      return action.payload;
    case CONNECTION_ACTION_TYPES.CREATE_CONNECTION:
      return action.payload;
    default:
      return state;
  }
};
