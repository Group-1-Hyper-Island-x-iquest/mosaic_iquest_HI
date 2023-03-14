import { MODAL_ACTION_TYPES } from "../reducers-actions/modalActions";

const initialState = {
  visible: false,
  content: null,
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_ACTION_TYPES.SHOW_MODAL_CONNECTION:
      return {
        ...state,
        visible: true,
        content: action.content,
      };
    case MODAL_ACTION_TYPES.SHOW_MODAL_JOB:
      return {
        ...state,
        visible: true,
        content: action.content,
      };
    case MODAL_ACTION_TYPES.HIDE_MODAL:
      return {
        ...state,
        visible: false,
        content: action.content,
      };
    default:
      return state;
  }
};
