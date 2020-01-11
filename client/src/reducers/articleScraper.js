import { SCRAPE_ARTICLES, LOADING } from "../actions/types";

const initialState = {
  scrapedArticles: [],
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SCRAPE_ARTICLES:
      return {
        ...state,
        scrapedArticles: payload,
        loading: false
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
