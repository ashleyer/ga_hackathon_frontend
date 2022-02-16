import { combineReducers } from "redux";
import { eventReducer } from "./eventReducer";

const reducers = combineReducers({
  allEvents: eventReducer
})

export default reducers