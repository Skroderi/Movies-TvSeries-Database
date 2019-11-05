import { SEARCH_ITEM, CLEAR_SEARCHED_ITEMS } from "../actions/types";

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_ITEM:
      return [...payload];
    case CLEAR_SEARCHED_ITEMS:
      return [];
    default:
      return state;
  }
}
