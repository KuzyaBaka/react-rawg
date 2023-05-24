import axios from "axios";

export const actionType = {
  SET_GEMES: "SET_GAMES",
  SET_GAMES_SUCCESS: "SET_GAMES_SUCCESS",
  SET_GAMES_ERROR: "SET_GAMES_ERROR",
};

export const actionGames = {
  getGames: () => {
    return async (dispatch) => {
      dispatch({ type: actionType.SET_GEMES });
      await axios
        .get(
          `https://api.rawg.io/api/games?key=3fc1488daffe4381b255782d5561a3a9`
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
                payload: console.error()
            })
        })
    };
  },
};
