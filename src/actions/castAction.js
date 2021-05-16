import axios from "axios";

const getCastList = (id) => async (dispatch) => {
   try {
      dispatch({ type: "FETCH_CAST_LIST_REQUEST" });
      const {
         data: { cast },
      } = await axios.get(`
        ${process.env.REACT_APP_URI}movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
      dispatch({ type: "FETCH_CAST_LIST_SUCCESS", payload: cast });
   } catch (error) {}
};

const getCastDetails = (id) => async (dispatch) => {
   try {
      dispatch({ type: "FETCH_CAST_DETAILS_REQUEST" });
      const { data } = await axios.get(`${process.env.REACT_APP_URI}person/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
      dispatch({ type: "FETCH_CAST_DETAILS_SUCCESS", payload: data });
   } catch (error) {}
};

export { getCastList, getCastDetails };
