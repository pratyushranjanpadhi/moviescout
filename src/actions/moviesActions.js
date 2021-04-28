import axios from "axios";

const getMoviesList = (genreId = null) => async (dispatch) => {
   try {
      dispatch({ type: "FETCH_MOVIE_LIST_REQUEST" });
      if (genreId) {
         const {
            data: { results },
         } = await axios.get(
            `${process.env.REACT_APP_URI}discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${genreId}&language=en-US&sort_by=popularity.desc`
         );
         dispatch({ type: "FETCH_MOVIE_LIST_SUCCESS", payload: results });
      } else {
         const {
            data: { results },
         } = await axios.get(
            `${process.env.REACT_APP_URI}discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc`
         );
         dispatch({ type: "FETCH_MOVIE_LIST_SUCCESS", payload: results });
      }
   } catch (error) {}
};

export { getMoviesList };
