import { FETCH_MOVIES, FETCH_POPULAR_MOVIES, FETCH_TOP_MOVIES } from "./types";

// const movieApi = `https://api.themoviedb.org/3/trending/movie/day?api_key=${ApiKey}`;
// const popularMovieApi = `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}`;
// const topRatedMovieApi = `https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}`;
// const popularTvApi = `https://api.themoviedb.org/3/tv/popular?api_key=${ApiKey}`;
// const topRatedTvApi = `https://api.themoviedb.org/3/tv/top_rated?api_key=${ApiKey}`;
// const tvApi = `https://api.themoviedb.org/3/trending/tv/day?api_key=${ApiKey}`;
const ApiKey = "b53da4cd71ebc2f41acc2d9844e25e62";
const movieApi = `https://api.themoviedb.org/3/trending/movie/day?api_key=${ApiKey}`;

export function fetchMovies() {
  return function(dispatch) {
    fetch(movieApi)
      .then(response => response.json())
      .then(data =>
        dispatch({
          type: FETCH_MOVIES,
          payload: data.results
        })
      );
  };
}

export function fetchSortedMovies(category) {
  const popularMovieApi = `https://api.themoviedb.org/3/movie/${category}?api_key=${ApiKey}`;
  return function(dispatch) {
    fetch(popularMovieApi)
      .then(response => response.json())
      .then(data => {
        if (category === "popular") {
          dispatch({
            type: FETCH_POPULAR_MOVIES,
            payload: data.results
          });
        } else {
          dispatch({
            type: FETCH_TOP_MOVIES,
            payload: data.results
          });
        }
      })
      .catch(err => console.log(err));
  };
}
