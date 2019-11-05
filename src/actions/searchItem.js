import { SEARCH_ITEM, CLEAR_SEARCHED_ITEMS } from "./types";
const ApiKey = "b53da4cd71ebc2f41acc2d9844e25e62";

export function searchItem(item, value) {
  const Api = `https://api.themoviedb.org/3/search/${item}?api_key=${ApiKey}&query=${value}`;
  return function(dispatch) {
    fetch(Api)
      .then(response => response.json())
      .then(data =>
        dispatch({
          type: SEARCH_ITEM,
          payload: data.results
        })
      )
      .catch(err => console.log(err));
  };
}

export const clearSearchedItems = () => dispatch => {
  dispatch({
    type: CLEAR_SEARCHED_ITEMS
  });
};
