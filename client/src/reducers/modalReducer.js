import { MODAL_ACTION_TYPES } from "../reducers-actions/modalActions";

const initialState = {
  currentModalType: null,
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
        currentModalType: MODAL_ACTION_TYPES.SHOW_MODAL_CONNECTION,
      };
    case MODAL_ACTION_TYPES.SHOW_MODAL_JOB:
      return {
        ...state,
        visible: true,
        content: action.content,
        currentModalType: MODAL_ACTION_TYPES.SHOW_MODAL_JOB,
      };
    case MODAL_ACTION_TYPES.HIDE_MAIN_MODAL:
      return {
        ...state,
        visible: false,
        content: action.content,
      };
    case MODAL_ACTION_TYPES.HIDE_CONFIRMATION_MODAL:
      return {
        ...state,
        visible: false,
        content: action.content,
      };
    default:
      return state;
  }
};
