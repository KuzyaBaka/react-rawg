import { actionType } from "../actions/gameAction";

const initialState = {
  games: [],
  loading: false,
  error: false,
};

export const gameReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionType.SET_GAMES:
      return {
        ...state,
        games: [],
        loading: true,
        error: false,
      };
    case actionType.SET_GAMES_SUCCESS:
      return {
        ...state,
        games: payload,
        loading: false,
        error: false,
      };
    case actionType.SET_GAMES_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return {
        ...state,
      };
  }
};
