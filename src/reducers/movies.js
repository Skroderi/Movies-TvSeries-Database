import {
  FETCH_MOVIES,
  FETCH_POPULAR_MOVIES,
  FETCH_TOP_MOVIES
} from "../actions/types";

const initialState = {
  trending: [],
  popular: [],
  top_rated: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_MOVIES:
      return { ...state, trending: payload };
    case FETCH_POPULAR_MOVIES:
      return { ...state, popular: payload };
    case FETCH_TOP_MOVIES:
      return { ...state, top_rated: payload };
    default:
      return state;
  }
}
