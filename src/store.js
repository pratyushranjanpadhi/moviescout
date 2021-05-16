import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { movieListReducer, movieDetailsReducer, movieVideoReducer } from "./reducers/movieReducers";
import { genreListReducer } from "./reducers/genreListReducers";
import { castListReducer, castDetailsReduce } from "./reducers/castReducers";

const reducer = combineReducers({
   movieList: movieListReducer,
   movieDetails: movieDetailsReducer,
   movieVideo: movieVideoReducer,
   genreList: genreListReducer,
   castList: castListReducer,
   castDetails: castDetailsReduce,
});

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
