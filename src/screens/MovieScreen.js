import React from "react";

const MovieScreen = ({ match }) => {
   return <div>{match.params.id}</div>;
};

export default MovieScreen;
