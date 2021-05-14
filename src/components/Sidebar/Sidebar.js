import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";
import { AiFillPlayCircle } from "react-icons/ai";

import { genres } from "./genres";

const Sidebar = ({ genreName }) => {
   const renderGenres = () => {
      return genres.map((genre) => {
         return (
            <Link to={`/movies/${genre.name}`} key={genre.id} className={`sidebar__inside ${genre.name === genreName ? "active" : ""}`}>
               <AiFillPlayCircle className="sidebar__inside--icon" />
               {genre.name}
            </Link>
         );
      });
   };
   return (
      <div className="sidebar">
         <Link to="/" className="sidebar__logo">
            M
         </Link>
         <h3 className="sidebar__heading">Genres</h3>
         {renderGenres()}
      </div>
   );
};

export default Sidebar;
