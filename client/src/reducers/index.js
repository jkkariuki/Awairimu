import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";

import trulia from "./trulia";
import profile from "./profile";

import articleScraper from "./articleScraper";

export default combineReducers({
  alert,
  auth,
  trulia,
  articleScraper,
  profile
});
