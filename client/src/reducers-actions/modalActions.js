export const MODAL_ACTION_TYPES = {
  SHOW_MODAL: "SHOW_MODAL",
  HIDE_MODAL: "HIDE_MODAL",
};

export const showModal = () => ({
  type: MODAL_ACTION_TYPES.SHOW_MODAL,
});

export const hideModal = () => ({
  type: MODAL_ACTION_TYPES.HIDE_MODAL,
});
