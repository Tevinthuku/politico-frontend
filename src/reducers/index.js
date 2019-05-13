import { combineReducers } from "redux";

import user from "./authreducer";
import errors from "./errorsreducer";

export default combineReducers({
  user,
  errors
});
