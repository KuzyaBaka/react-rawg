import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { gameReducer } from "./reducers/gameReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  games: gameReducer,
});

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
)