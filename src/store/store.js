import { createStore, applyMiddleware } from "redux";
import counterReducer from "./counterReducer";
import loggerMiddelware from "./loggerMiddleware";

const store = createStore(counterReducer, applyMiddleware(loggerMiddelware));

export default store;
