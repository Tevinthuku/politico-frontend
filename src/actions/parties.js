import axios from "axios";

import actionTypes from "./actionTypes";

import { API_URL } from "../../src/global";

export const getAllParties = () => {
  return dispatch =>
    axios.get(API_URL + "api/v2/parties").then(data => {
      dispatch({
        type: actionTypes.SET_PARTIES_LIST,
        payload: data.data.data
      });
    });
};
