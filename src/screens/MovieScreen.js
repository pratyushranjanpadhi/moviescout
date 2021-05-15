import React from "react";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import MovieList from "../components/MovieList/MovieList";
import Sidebar from "../components/Sidebar/Sidebar";

const MovieScreen = ({ match }) => {
   return (
      <div>
         <Sidebar genreName="" />
         <MovieDetails id={match.params.id} />
         <MovieList movieId={match.params.id} />
      </div>
   );
};

export default MovieScreen;
