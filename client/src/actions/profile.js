import axios from "axios";
import { setAlert } from "./alert";

import { GET_USER, USER_ERROR, SAVE_LISTING } from "./types";

export const getCurrentUser = () => async dispatch => {
  try {
    const res = await axios.get("/api/profile/my-profile");

    console.log(res.data);
    dispatch({
      type: GET_USER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const saveListing = listing => async dispatch => {
  try {
    // console.log(listing);
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const res = await axios.post("/api/profile/favorites", listing, config);

    dispatch({
      type: SAVE_LISTING,
      payload: res.data
    });

    dispatch(setAlert("Listing Saved", "success"));
  } catch (err) {
    dispatch(setAlert(err.response.data.msg, "danger"));
  }
};
