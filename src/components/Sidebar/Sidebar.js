import React from "react";
import "./sidebar.scss";
import { useDispatch } from "react-redux";

import { getMoviesList } from "../../actions/moviesActions";
import { genres } from "./genres";

const Sidebar = () => {
   const dispatch = useDispatch();

   const clickHandler = (id) => {
      dispatch(getMoviesList(id));
   };

   const renderGenres = () => {
      return genres.map((genre) => {
         return (
            <button onClick={() => clickHandler(genre.id)} key={genre.id} className="sidebar__inside">
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
