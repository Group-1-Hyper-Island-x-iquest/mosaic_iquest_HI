import { MODAL_ACTION_TYPES } from "../reducers-actions/modalActions";

const initialState = {
  visible: false,
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_ACTION_TYPES.SHOW_MODAL:
      return {
        ...state,
        visible: true,
      };
    case MODAL_ACTION_TYPES.HIDE_MODAL:
      return { ...state, visible: false };
    default:
      return state;
  }
};
