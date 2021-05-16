import React from "react";
import CastDetails from "../components/CastDetails/CastDetails";
import Sidebar from "../components/Sidebar/Sidebar";

const CastScreen = ({ match }) => {
   return (
      <>
         <Sidebar />
         <CastDetails id={match.params.id} />
      </>
   );
};

export default CastScreen;
