import { combineReducers } from "redux";
import movies from "./movies";
import tvseries from "./tvseries";
import itemDetails from "./itemDetails";
import searchedItems from "./searchedItems";
export default combineReducers({
  movies,
  tvseries,
  itemDetails,
  searchedItems
});
