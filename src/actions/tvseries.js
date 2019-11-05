import { FETCH_TVS, FETCH_POPULAR_TVS, FETCH_TOP_TVS } from "./types";

const ApiKey = "b53da4cd71ebc2f41acc2d9844e25e62";
const tvApi = `https://api.themoviedb.org/3/trending/tv/day?api_key=${ApiKey}`;

export function fetchTvs() {
  return function(dispatch) {
    fetch(tvApi)
      .then(response => response.json())
      .then(data =>
        dispatch({
          type: FETCH_TVS,
          payload: data.results
        })
      )
      .catch(err => console.log(err));
  };
}

export function fetchSortedTvs(currentSort) {
  const popularTvApi = `https://api.themoviedb.org/3/tv/${currentSort}?api_key=${ApiKey}`;
  return function(dispatch) {
    fetch(popularTvApi)
      .then(response => response.json())
      .then(data => {
        if (currentSort === "popular") {
          dispatch({
            type: FETCH_POPULAR_TVS,
            payload: data.results
          });
        } else {
          dispatch({
            type: FETCH_TOP_TVS,
            payload: data.results
          });
        }
      })
      .catch(err => console.log(err));
  };
}
