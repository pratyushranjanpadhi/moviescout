import React from "react";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import Sidebar from "../components/Sidebar/Sidebar";

const MovieScreen = ({ match }) => {
   return (
      <div>
         <Sidebar genreName="" />
         <MovieDetails id={match.params.id} />{" "}
      </div>
   );
};

export default MovieScreen;
