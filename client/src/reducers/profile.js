import {
  GET_USER,
  USER_ERROR,
  UPDATE_FAVES,
  LISTING_MSG,
  LOGOUT
} from "../actions/types";

const initialState = {
  user: null,
  profiles: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_USER:
    case LISTING_MSG:
    case UPDATE_FAVES:
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
      return {
        ...state,
        user: null,
        loading: false
      };
    default:
      return state;
  }
}
