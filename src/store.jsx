import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { allReducers } from "./Reducers/CombineReducers";
const initState = {};
export const store = createStore(
  allReducers,
  applyMiddleware(thunk)
);
