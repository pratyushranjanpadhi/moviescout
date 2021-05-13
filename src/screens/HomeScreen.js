import React from "react";

import MovieList from "../components/MovieList/MovieList";
import Sidebar from "../components/Sidebar/Sidebar";
// import Header from "../components/Header/Header";

const HomeScreen = ({ match }) => {
   return (
      <>
         {/* <Header /> */}
         <Sidebar genreName={match.params.genre} />
         <MovieList genre={match.params.genre} />
      </>
   );
};

export default HomeScreen;
