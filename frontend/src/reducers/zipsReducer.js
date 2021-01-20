import { FETCH_ZIPS } from "../actions/types";

export default function (state = [], action) {
  // console.log(action);
  switch (action.type) {
    case FETCH_ZIPS:
      return action.payload;
    default:
      return state;
  }
}
