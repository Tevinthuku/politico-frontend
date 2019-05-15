import { combineReducers } from "redux";

import user from "./authreducer";
import errors from "./errorsreducer";
import userslist from "./userslistreducer";
import parties from "./partiesreducer";

export default combineReducers({
  user,
  errors,
  userslist,
  parties
});
