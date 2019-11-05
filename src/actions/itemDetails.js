import { GET_ITEM_DETAILS, GET_ITEM_CAST } from "./types";

const ApiKey = "b53da4cd71ebc2f41acc2d9844e25e62";

export function getItemDetails(item, id) {
  const api = `https://api.themoviedb.org/3/${item}/${id}?api_key=${ApiKey}&append_to_response=videos`;
  const castApi = `https://api.themoviedb.org/3/${item}/${id}/credits?api_key=${ApiKey}`;
  return async function(dispatch) {
    await fetch(api)
      .then(response => response.json())
      .then(data =>
        dispatch({
          type: GET_ITEM_DETAILS,
          payload: data
        })
      )
      .catch(error => console.log(error));

    await fetch(castApi)
      .then(response => response.json())
      .then(data =>
        dispatch({
          type: GET_ITEM_CAST,
          payload: data
        })
      )
      .catch(error => console.log(error));
  };
}
export function getItemCast(item, id) {
  const castApi = `https://api.themoviedb.org/3/${item}/${id}/credits?api_key=${ApiKey}`;
  return function(dispatch) {
    fetch(castApi)
      .then(response => response.json())
      .then(data =>
        dispatch({
          type: GET_ITEM_CAST,
          payload: data
        })
      )
      .catch(error => console.log(error));
  };
}
