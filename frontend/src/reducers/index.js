import { combineReducers } from "redux";
import authReducer from "./authReducer";
import listingReducer from "./listingReducer";
import zipsReducer from "./zipsReducer";
export default combineReducers({
  auth: authReducer,
  listings: listingReducer,
  zipcodes: zipsReducer,
});
