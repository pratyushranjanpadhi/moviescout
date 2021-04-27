import React from "react";

import MovieList from "../components/MovieList/MovieList";
import Sidebar from "../components/Sidebar/Sidebar";
// import Header from "../components/Header/Header";

const HomeScreen = () => {
   return (
      <>
         {/* <Header /> */}
         <Sidebar />
         <MovieList />
      </>
   );
};

export default HomeScreen;
