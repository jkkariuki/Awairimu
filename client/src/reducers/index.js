import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";

import simplyRets from "./simplyRets";
import profile from "./profile";

import articleScraper from "./articleScraper";

export default combineReducers({
  alert,
  auth,
  simplyRets,
  articleScraper,
  profile
});
