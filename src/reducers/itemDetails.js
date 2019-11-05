import { GET_ITEM_DETAILS, GET_ITEM_CAST } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ITEM_DETAILS:
      return { ...payload };
    case GET_ITEM_CAST:
      return { ...state, ...payload };
    default:
      return state;
  }
}
