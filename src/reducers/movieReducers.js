const movieListReducer = (state = { movies: [] }, action) => {
   switch (action.type) {
      case "FETCH_MOVIE_LIST_REQUEST":
         return { ...state, loading: true };
      case "FETCH_MOVIE_LIST_SUCCESS":
         return { ...state, loading: false, movies: action.payload };

      default:
         return state;
   }
};

export { movieListReducer };
