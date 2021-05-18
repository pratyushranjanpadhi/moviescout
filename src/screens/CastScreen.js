import React from "react";
import CastDetails from "../components/CastDetails/CastDetails";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const CastScreen = ({ match }) => {
   return (
      <>
         <Header />
         <Sidebar />
         <CastDetails id={match.params.id} />
         <Footer />
      </>
   );
};

export default CastScreen;
