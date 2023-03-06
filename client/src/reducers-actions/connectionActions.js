export const CONNECTION_ACTION_TYPES = {
  LOAD_ALL_CONNECTIONS:
    "LOAD_ALL_CONNECTIONS",
  CREATE_CONNECTION:
    "CREATE_CONNECTION",
};
//CONNECTION_ACTION_TYPES is an object that defines the action types used in
//the connectionReducer.
//It's used to ensure that the action types are consistent across the application and
// to avoid typos when dispatching actions.

//In this case, LOAD_ALL_CONNECTIONS and CREATE_CONNECTION are the two action types used in
// the connectionReducer to update the state of the connection variable in the Redux store. When an action of type LOAD_ALL_CONNECTIONS is dispatched, it updates the connection state with the payload received from the server, and when an action of type CREATE_CONNECTION is dispatched, it updates the connection state with the new connection data
