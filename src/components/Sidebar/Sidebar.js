import React, { useEffect } from "react";
import "./sidebar.scss";
import { useDispatch, useSelector } from "react-redux";

import { getGenreList } from "../../actions/genreActions";
import { genres } from "./genres";

const Sidebar = () => {
   // const dispatch = useDispatch();
   // const genreList = useSelector((state) => state.genreList);
   // const { genres } = genreList;
   // useEffect(() => {
   //    dispatch(getGenreList());
   // }, [dispatch]);

   const renderGenres = () => {
      return genres.map((genre) => {
         console.log(genre.name);
         return (
            <button key={genre.id} className="sidebar__inside">
               {genre.name}
            </button>
         );
      });
   };
   return (
      <div className="sidebar">
         <div className="sidebar__logo">M</div>
         <h3 className="sidebar__heading">Genres</h3>
         {renderGenres()}
      </div>
   );
};

export default Sidebar;
