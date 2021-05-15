import axios from "axios";

const getMoviesList =
   (genreId = null, movieId = null, otherListName = null, page = 1) =>
   async (dispatch) => {
      try {
         if (movieId) {
            dispatch({ type: "FETCH_MOVIE_LIST_REQUEST" });
            const {
               data: { results },
            } = await axios.get(
               `${process.env.REACT_APP_URI}/movie/${movieId}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=${page}`
            );
            dispatch({ type: "FETCH_MOVIE_LIST_SUCCESS", payload: results });
         } else if (genreId) {
            dispatch({ type: "FETCH_MOVIE_LIST_REQUEST" });
            const {
               data: { results },
            } = await axios.get(
               `${process.env.REACT_APP_URI}discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${genreId}&language=en-US&sort_by=popularity.desc&page=${page}`
            );
            dispatch({ type: "FETCH_MOVIE_LIST_SUCCESS", payload: results });
         } else if (otherListName) {
            dispatch({ type: "FETCH_MOVIE_LIST_REQUEST" });
            const {
               data: { results },
            } = await axios.get(`${process.env.REACT_APP_URI}movie/${otherListName}?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
            dispatch({ type: "FETCH_MOVIE_LIST_SUCCESS", payload: results });
         } else {
            dispatch({ type: "FETCH_MOVIE_LIST_REQUEST" });
            const {
               data: { results },
            } = await axios.get(
               `${process.env.REACT_APP_URI}discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=${page}`
            );
            dispatch({ type: "FETCH_MOVIE_LIST_SUCCESS", payload: results });
         }
      } catch (error) {}
   };

const getMovieDetails = (id) => async (dispatch) => {
   try {
      dispatch({ type: "FETCH_MOVIE_DETAILS_REQUEST" });
      const { data } = await axios.get(`${process.env.REACT_APP_URI}movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
      dispatch({ type: "FETCH_MOVIE_DETAILS_SUCCESS", payload: data });
   } catch (error) {}
};

const getMovieVideo = (id) => async (dispatch) => {
   try {
      dispatch({ type: "FETCH_MOVIE_VIDEO_REQUEST" });
      const {
         data: { results },
      } = await axios.get(`${process.env.REACT_APP_URI}movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
      dispatch({ type: "FETCH_MOVIE_VIDEO_SUCCESS", payload: results });
   } catch (error) {}
};

export { getMoviesList, getMovieDetails, getMovieVideo };
