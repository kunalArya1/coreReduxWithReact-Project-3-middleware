const loggerMiddelware = (store) => (next) => (action) => {
  console.log("Current State: ", store.getState());
  console.log("Actions: ", action);
  next(action);
  console.log("New State: ", store.getState());
};

export default loggerMiddelware;
