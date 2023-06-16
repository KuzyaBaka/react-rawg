import axios from "axios";

export const actionType = {
  SET_GAMES: "SET_GAMES",
  SET_GAMES_SUCCESS: "SET_GAMES_SUCCESS",
  SET_GAMES_ERROR: "SET_GAMES_ERROR",

  SET_GAMES_SEARCH: "SET_GAMES_SEARCH",
  SET_GAMES_SEARCH_SUCCESS: "SET_GAMES_SEARCH_SUCCESS",
  SET_GAMES_SEARCH_ERROR: "SET_GAMES_SEARCH_ERROR",
};

export const actionGames = {
  getGames: (page) => {
    return async (dispatch) => {
      dispatch({ type: actionType.SET_GAMES });
      await axios
        .get(
          `https://api.rawg.io/api/games?key=3fc1488daffe4381b255782d5561a3a9&page=${page}`
        )
        .then((res) => {
          dispatch({
            type: actionType.SET_GAMES_SUCCESS,
            payload: res.data.results,
          });
        })
        .catch((err) => {
            dispatch({
                type: actionType.SET_GAMES_ERROR,
                payload: err
            })
        })
    };
  },

/*                                                     */

  getGamesSearch: (search) => {
    return async (dispatch) => {
      dispatch({ type: actionType.SET_GAMES });
      await axios
        .get(
          `https://api.rawg.io/api/games?key=3fc1488daffe4381b255782d5561a3a9&search=${search}`
        )
        .then((res) => {
          dispatch({
            type: actionType.SET_GAMES_SUCCESS,
            payload: res.data.results,
          });
        })
        .catch((err) => {
            dispatch({
                type: actionType.SET_GAMES_ERROR,
                payload: err
            })
        })
    };
  },
};
