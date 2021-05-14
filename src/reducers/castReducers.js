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

export { castListReducer };
