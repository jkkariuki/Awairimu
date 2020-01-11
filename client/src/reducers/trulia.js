import {
  GET_LISTINGS,
  SEARCH_LISTINGS,
  GET_LISTING,
  LISTING_ERROR,
  LOADING
} from "../actions/types";

const initialState = {
  listings: [],
  listing: null,
  searchResults: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_LISTINGS:
      return {
        ...state,
        listings: payload,
        loading: false
      };
    case SEARCH_LISTINGS:
      return {
        ...state,
        listings: payload,
        loading: false
      };
    case GET_LISTING:
      return {
        ...state,
        listing: payload,
        loading: false
      };
    case LISTING_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case LOADING:
      return {
        ...state,
        listings: [],
        loading: true
      };
    default:
      return state;
  }
}
