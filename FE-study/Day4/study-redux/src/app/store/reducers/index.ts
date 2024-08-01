import { combineReducers } from "redux";
import usersReducer from "./user-reducers";

const rootReducer = combineReducers({
  users: usersReducer,
});

export default rootReducer;
