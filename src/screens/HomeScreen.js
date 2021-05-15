import React, { useState } from "react";

import MovieList from "../components/MovieList/MovieList";
import Pagination from "../components/Pagination/Pagination";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

const HomeScreen = ({ match }) => {
   const [currentPage, setCurrentPage] = useState(1);

   const onPageChange = (page) => {
      setCurrentPage(page);
   };

   return (
      <>
         <Header />
         <Sidebar genreName={match.params.genre} />
         <MovieList genre={match.params.genre} page={currentPage} />
         <Pagination pageChange={onPageChange} />
      </>
   );
};

export default HomeScreen;
