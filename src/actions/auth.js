import axios from "axios";
import actionTypes from "./actionTypes";

import { API_URL } from "../global";

export const login = (email, password, history) => {
  return dispatch => {
    return axios
      .post(API_URL + "api/v2/auth/signin", { email, password })
      .then(data => {
        dispatch({
          type: actionTypes.SET_USER_DETAILS,
          payload: data.data
        });
        history.push("/");
      })
      .catch(err => {
        dispatch({
          type: actionTypes.SET_ERROR,
          payload: err.response.data
        });
      });
  };
};
