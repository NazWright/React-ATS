import { FETCH_SUBS } from "../actions/types";

export default function (state = [], action) {
  // console.log(action);
  switch (action.type) {
    case FETCH_SUBS:
      return action.payload;
    default:
      return state;
  }
}
