import { FETCH_FIELDS } from "../actions/types";

export default function (state = [], action) {
  // console.log(action);
  switch (action.type) {
    case FETCH_FIELDS:
      return action.payload;
    default:
      return state;
  }
}
