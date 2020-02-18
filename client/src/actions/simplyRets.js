import axios from "axios";
import {
  GET_LISTINGS,
  SEARCH_LISTINGS,
  GET_LISTING,
  LISTING_ERROR
  // LOADING
} from "./types";

//get listing by id
export const getListingById = id => async dispatch => {
  try {
    const res = await axios.get(`/api/simplyRets/listing/${id}`);

    console.log(res.data);
    dispatch({
      type: GET_LISTING,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: LISTING_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//action to load all listings from simplyRets
export const getAllRetsListings = () => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const res = await axios.post("/api/simplyRets/listings", config);

    const response = res.data;

    console.log(response);

    dispatch({
      type: GET_LISTINGS,
      payload: response
    });
  } catch (err) {
    console.log("errors");
  }
};

//listing search form action
export const simplyRetsSearch = framework => async dispatch => {
  try {
    console.log(framework);
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const res = await axios.post("/api/simplyRets/search", framework, config);

    const response = res.data;

    dispatch({
      type: SEARCH_LISTINGS,
      payload: response
    });
  } catch (err) {
    console.log("errors");
  }
};
