const castListReducer = (state = { casts: [] }, action) => {
   switch (action.type) {
      case "FETCH_CAST_LIST_REQUEST":
         return { ...state, loading: true };
      case "FETCH_CAST_LIST_SUCCESS":
         return { ...state, loading: false, casts: action.payload };
      default:
         return state;
   }
};

const castDetailsReduce = (state = { cast: {} }, action) => {
   switch (action.type) {
      case "FETCH_CAST_DETAILS_REQUEST":
         return { ...state, loading: true };
      case "FETCH_CAST_DETAILS_SUCCESS":
         return { ...state, loading: false, cast: action.payload };
      default:
         return state;
   }
};

export { castListReducer, castDetailsReduce };
