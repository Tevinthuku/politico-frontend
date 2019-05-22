import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { loadState, saveState } from "localstorage-redux/lib";

import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

export const middlewares = [ReduxThunk];

const preloadedState = loadState();

const store = createStore(
  rootReducer,
  preloadedState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

saveState({
  store,
  items: ["user"]
});

export default store;
