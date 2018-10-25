export const select = (task) => {
  return {
    type: "TASK_SELECTED",
    payload: task
  }
};

export const takeInfo = (data) => {
  return {
    type: "TAKE_DATA",
    payload: data
  }
};