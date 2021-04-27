const genreListReducer = (state = { genres: [] }, action) => {
   switch (action.type) {
      case "FETCH_GENRE_LIST_REQUEST":
         return { ...state, loading: true };
      case "FETCH_GENRE_LIST_SUCCESS":
         return { ...state, loading: false, genres: action.payload };
      default:
         return state;
   }
};

export { genreListReducer };
