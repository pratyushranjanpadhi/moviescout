import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import MovieList from "../components/MovieList/MovieList";
import Sidebar from "../components/Sidebar/Sidebar";

const MovieScreen = ({ match }) => {
   return (
      <div>
         <Header />
         <Sidebar genreName="" />
         <MovieDetails id={match.params.id} />
         <MovieList movieId={match.params.id} />
         <Footer />
      </div>
   );
};

export default MovieScreen;
