import { combineReducers } from "redux";
import authReducer from "./authReducer";
import fieldsReducer from "./fieldsReducer";
import listingReducer from "./listingReducer";
import submissionsReducer from "./submissionsReducer";
import zipsReducer from "./zipsReducer";
export default combineReducers({
  auth: authReducer,
  listings: listingReducer,
  zipcodes: zipsReducer,
  fields: fieldsReducer,
  subs: submissionsReducer,
});
