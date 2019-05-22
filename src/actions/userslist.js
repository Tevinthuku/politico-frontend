import axios from "axios";

import actionTypes from "./actionTypes";

import { API_URL } from "../../src/global";

export const getAllUsers = () => {
  return dispatch =>
    axios.get(API_URL + "api/v2/users").then(data => {
      dispatch({
        type: actionTypes.SET_USERS_LIST,
        payload: data.data.data
      });
    });
};
