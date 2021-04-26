const movieListReducer = (state = { movies: [] }, action) => {
   switch (action.type) {
      case "FETCH_MOVIE_LIST":
         return { ...state, movies: action.payload };

      default:
         return state;
   }
};

export { movieListReducer };
