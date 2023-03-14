export const MODAL_ACTION_TYPES = {
  SHOW_MODAL_CONNECTION: "SHOW_MODAL_CONNECTION",
  SHOW_MODAL_JOB: "SHOW_MODAL_JOB",
  HIDE_MAIN_MODAL: "HIDE_MAIN_MODAL",
  HIDE_CONFIRMATION_MODAL: "HIDE_CONFIRMATION_MODAL",
};

export const showModalConnections = () => ({
  type: MODAL_ACTION_TYPES.SHOW_MODAL_CONNECTION,
});

export const showModalJobs = () => ({
  type: MODAL_ACTION_TYPES.SHOW_MODAL_JOB,
});

export const hideMainModal = () => ({
  type: MODAL_ACTION_TYPES.HIDE_MAIN_MODAL,
});

export const hideConfirmationModal = () => ({
  type: MODAL_ACTION_TYPES.HIDE_CONFIRMATION_MODAL,
});
