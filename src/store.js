import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { movieListReducer } from "./reducers/movieReducers";

const reducer = combineReducers({
   movieList: movieListReducer,
});

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
