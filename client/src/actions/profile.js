import axios from "axios";
import { setAlert } from "./alert";

import {
  GET_USER,
  USER_ERROR,
  SAVE_LISTING,
  UPDATE_FAVES,
  LISTING_MSG
} from "./types";

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

//Remove Like
export const removeListing = id => async dispatch => {
  try {
    console.log("ID HERE:" + id);
    const res = await axios.put("/api/profile/unfave/" + id);
    console.log(res.data);
    dispatch({
      type: UPDATE_FAVES,
      payload: res.data
    });
    dispatch(setAlert("Favorites Updated", "success"));
  } catch (err) {
    dispatch(setAlert(err.response.data.msg, "danger"));

    // dispatch({
    //   type: POST_ERROR,
    //   payload: { msg: err.response.statusText, status: err.response.status }
    // });
  }
};

export const listingMsg = (listing, formData) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const res = await axios.post("/api/profile/message/", {
      listing,
      formData,
      config
    });

    dispatch({
      type: LISTING_MSG,
      payload: res.data
    });

    dispatch(setAlert("Message Sent", "success"));
  } catch (err) {
    dispatch(setAlert("Please Login", "danger"));
    // console.log("Errors Here:" + err.resonse.data);
    // dispatch({
    //   type: MSG_ERROR,
    //   payload: { msg: err.response.statusText, status: err.response.status }
    // });
  }
};
