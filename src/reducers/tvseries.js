import { FETCH_TVS, FETCH_POPULAR_TVS, FETCH_TOP_TVS } from "../actions/types";

const initialState = {
  trending: [],
  popular: [],
  top_rated: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_TVS:
      return { ...state, trending: payload };
    case FETCH_POPULAR_TVS:
      return { ...state, popular: payload };
    case FETCH_TOP_TVS:
      return { ...state, top_rated: payload };
    default:
      return state;
  }
}
