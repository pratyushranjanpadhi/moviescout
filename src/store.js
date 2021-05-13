import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { movieListReducer, movieDetailsReducer } from "./reducers/movieReducers";
import { genreListReducer } from "./reducers/genreListReducers";

const reducer = combineReducers({
   movieList: movieListReducer,
   movieDetails: movieDetailsReducer,
   genreList: genreListReducer,
});

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
