import axios from "axios";
import { setAlert } from "./alert";

import {
  GET_SAVED,
  USER_ERROR,
  SAVE_LISTING,
  UPDATE_FAVES,
  LISTING_MSG
} from "./types";

export const getSavedListings = () => async dispatch => {
  try {
    const res = await axios.get("/api/profile/savedListings");

    console.log(res.data);
    dispatch({
      type: GET_SAVED,
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
    console.log(err);

    dispatch(setAlert(err.response.data.msg, "danger"));
  }
};

//Remove Listing
export const removeListing = id => async dispatch => {
  try {
    const res = await axios.put("/api/profile/unfave/" + id);

    dispatch({
      type: UPDATE_FAVES,
      payload: res.data
    });

    dispatch(setAlert("Favorites Updated", "success"));
  } catch (err) {
    dispatch(setAlert(err.response.data.msg, "danger"));
  }
};

export const contactMsg = ({ listingId, message }) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const body = JSON.stringify({ listingId, message });

    const res = await axios.post("/api/profile/message", body, config);

    dispatch({
      type: LISTING_MSG,
      payload: res.data.user
    });

    dispatch(setAlert("Message Sent", "success"));
  } catch (err) {
    dispatch(setAlert("Please Login", "danger"));
  }
};
