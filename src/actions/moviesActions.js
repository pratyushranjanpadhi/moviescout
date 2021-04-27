import axios from "axios";

const getMoviesList = () => async (dispatch) => {
   try {
      dispatch({ type: "FETCH_MOVIE_LIST_REQUEST" });
      const {
         data: { results },
      } = await axios.get(
         `${process.env.REACT_APP_URI}discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
      );
      dispatch({ type: "FETCH_MOVIE_LIST_SUCCESS", payload: results });
   } catch (error) {}
};

export { getMoviesList };
