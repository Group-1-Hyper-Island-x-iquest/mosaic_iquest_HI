export const MODAL_ACTION_TYPES = {
  SHOW_MODAL_CONNECTION: "SHOW_MODAL_CONNECTION",
  SHOW_MODAL_JOB: "SHOW_MODAL_JOB",
  HIDE_MODAL: "HIDE_MODAL",
};

export const showModalConnections = () => ({
  type: MODAL_ACTION_TYPES.SHOW_MODAL_CONNECTION,
});

export const showModalJobs = () => ({
  type: MODAL_ACTION_TYPES.SHOW_MODAL_JOB,
});

export const hideModal = () => ({
  type: MODAL_ACTION_TYPES.HIDE_MODAL,
});
