import {
  GET_SAVED,
  USER_LOADED,
  USER_ERROR,
  UPDATE_FAVES,
  LISTING_MSG,
  LOGOUT
} from "../actions/types";

const initialState = {
  user: null,
  favorites: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_SAVED:
    case UPDATE_FAVES:
      return {
        ...state,
        favorites: payload,
        loading: false
      };
    case LISTING_MSG:
      return {
        ...state,
        user: payload,
        loading: false
      };
    case USER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case LOGOUT:
      localStorage.removeItem("token");

      return {
        ...state,
        user: null,
        loading: false
      };
    default:
      return state;
  }
}
