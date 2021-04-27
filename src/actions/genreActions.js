import axios from "axios";
const getGenreList = () => async (dispatch) => {
   try {
      dispatch({ type: "FETCH_GENRE_LIST_REQUEST" });
      const {
         data: { genres },
      } = await axios.get(`${process.env.REACT_APP_URI}genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);

      dispatch({ type: "FETCH_GENRE_LIST_SUCCESS", payload: genres });
   } catch (error) {}
};

export { getGenreList };
