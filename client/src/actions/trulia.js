import axios from "axios";
import {
  GET_LISTINGS,
  SEARCH_LISTINGS,
  GET_LISTING,
  LISTING_ERROR,
  LOADING
} from "./types";

export const getJClistings = () => async dispatch => {
  try {
    const res = await axios.get("/api/trulia/featuredListings");
    const response = res.data.result.listings;
    dispatch({
      type: GET_LISTINGS,
      payload: response
    });
  } catch (err) {
    console.log("errors");
  }
};

export const getListingById = listingId => async dispatch => {
  try {
    const AUTH_HEADER = {
      auth: {
        username: "simplyrets",
        password: "simplyrets"
      }
    };

    const res = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.simplyrets.com/properties/${listingId}
      `,
      AUTH_HEADER
    );
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

export const getAllRetsListings = () => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const AUTH_HEADER = {
      auth: {
        username: "simplyrets",
        password: "simplyrets"
      }
    };

    const res = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.simplyrets.com/properties?limit=500&idx=null&count=true
      `,
      AUTH_HEADER
    );
    const response = res.data;
    console.log(response);

    // dispatch({
    //   type: LOADING,
    //   payload: response
    // });

    dispatch({
      type: GET_LISTINGS,
      payload: response
    });
  } catch (err) {
    console.log("errors");
  }
};

export const search = framework => async dispatch => {
  try {
    console.log(framework);

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const res = await axios.post(
      "/api/trulia/searchListings",
      framework,
      config
    );

    const response = res.data.result.listings;
    console.log(response);

    // dispatch({
    //   type: LOADING,
    //   payload: response
    // });

    dispatch({
      type: GET_LISTINGS,
      payload: response
    });
  } catch (err) {
    console.log("errors");
  }
};

export const simplyRetsSearch = framework => async dispatch => {
  try {
    console.log(framework);

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const AUTH_HEADER = {
      auth: {
        username: "simplyrets",
        password: "simplyrets"
      }
    };
    if (framework.offerType && framework) {
      const res = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.simplyrets.com/properties?q=${framework.city}&type=${framework.offerType}&limit=500&idx=null&count=true`,
        AUTH_HEADER
      );
      const response = res.data;
      console.log(response);

      // dispatch({
      //   type: LOADING,
      //   payload: response
      // });

      dispatch({
        type: SEARCH_LISTINGS,
        payload: response
      });
    }
    if (framework.offerType === "") {
      const res = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.simplyrets.com/properties?q=${framework.city}&limit=500&idx=null&count=true`,
        AUTH_HEADER
      );
      const response = res.data;
      console.log(response);

      // dispatch({
      //   type: LOADING,
      //   payload: response
      // });

      dispatch({
        type: SEARCH_LISTINGS,
        payload: response
      });
    }
    if (framework.city === "") {
      const res = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.simplyrets.com/properties?type=${framework.offerType}&limit=500&idx=null&count=true`,
        AUTH_HEADER
      );
      const response = res.data;
      console.log(response);

      // dispatch({
      //   type: LOADING,
      //   payload: response
      // });

      dispatch({
        type: SEARCH_LISTINGS,
        payload: response
      });
    }

    // request.then((args) => {
    //   console.log('response', args)
    // });
  } catch (err) {
    console.log("errors");
  }
};
