import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MovieList from "../components/MovieList/MovieList";
import Sidebar from "../components/Sidebar/Sidebar";

const FilteredListScreen = ({ match }) => {
   return (
      <>
         <Header />
         <Sidebar />
         <MovieList filteredKeyword={match.params.filteredKeyword} />
         <Footer />
      </>
   );
};

export default FilteredListScreen;
