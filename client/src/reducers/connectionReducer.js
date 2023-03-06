import { CONNECTION_ACTION_TYPES } from "../reducers-actions/connectionActions";

// connectionReducer is a Redux reducer function for the connection state.
//It takes in two parameters, the state which defaults to null, and an action object.

export const connectionReducer = (
  state = null,
  action
) => {
  //The reducer listens for specific action types using a switch statement.
  //In this case, it listens for the LOAD_ALL_CONNECTIONS and CREATE_CONNECTION action types
  //which are defined in the CONNECTION_ACTION_TYPES object imported from the
  //connectionActions file.

  switch (action.type) {
    case CONNECTION_ACTION_TYPES.LOAD_ALL_CONNECTIONS: //If the action type is LOAD_ALL_CONNECTIONS,
      return action.payload; //the reducer returns the action.payload which is the data fetched from the server.
    case CONNECTION_ACTION_TYPES.CREATE_CONNECTION: //If the action type is CREATE_CONNECTION,
      return action.payload; //it returns the action.payload which is the newly created connection object.
    default:
      return state;
  }
};
