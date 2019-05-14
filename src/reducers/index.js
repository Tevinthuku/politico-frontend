import { combineReducers } from "redux";

import user from "./authreducer";
import errors from "./errorsreducer";
import userslist from "./userslistreducer";

export default combineReducers({
  user,
  errors,
  userslist
});
