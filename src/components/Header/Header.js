import React from "react";
import { useDispatch } from "react-redux";
import { getMoviesList } from "../../actions/moviesActions";
import "./header.scss";

const Header = () => {
   const dispatch = useDispatch();
   const clickHandler = (otherListName) => {
      if (otherListName) {
         dispatch(getMoviesList(null, null, otherListName));
      } else {
         dispatch(getMoviesList());
      }
   };
   return (
      <div className="header">
         <div className="header__btn-box">
            <button onClick={() => clickHandler()} className="header__btn">
               Home
            </button>
            <button onClick={() => clickHandler("now_playing")} className="header__btn">
               Now Playing
            </button>
            <button onClick={() => clickHandler("top_rated")} className="header__btn">
               Top Rated
            </button>
            <button onClick={() => clickHandler("upcoming")} className="header__btn">
               Upcoming
            </button>
         </div>

         <div className="header__searchbox">
            <form>
               <input type="text" className="header__input" />
               <button className="header__search-btn">Submit</button>
            </form>
         </div>
      </div>
   );
};

export default Header;
