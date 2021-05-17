import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getMoviesList } from "../../actions/moviesActions";
import { BsFillCollectionPlayFill, BsCalendar } from "react-icons/bs";
import { FaHome, FaSearch } from "react-icons/fa";
import { GiRank3 } from "react-icons/gi";

import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
   const [inputValue, setInputValue] = useState("");
   const dispatch = useDispatch();
   // const clickHandler = (otherListName) => {
   //    if (otherListName) {
   //       dispatch(getMoviesList(null, null, otherListName));
   //    } else {
   //       dispatch(getMoviesList());
   //    }
   // };

   const changeHandler = (e) => {
      setInputValue(e.target.value);
      console.log(inputValue);
   };

   const submitHandler = (e) => {
      e.preventDefault();
      dispatch(getMoviesList(null, null, null, 1, inputValue));
   };

   return (
      <div className="header">
         <div className="header__btn-box">
            <Link to="/" className="header__btn">
               <FaHome className="header__btn--icon" />
            </Link>

            <Link to="/now_playing" className="header__btn">
               <BsFillCollectionPlayFill className="header__btn--icon" />
               <span>Now Playing</span>
            </Link>

            <Link to="/top_rated" className="header__btn">
               <GiRank3 className="header__btn--icon" />
               <span>Top Rated</span>
            </Link>

            <Link to="/upcoming" className="header__btn">
               <BsCalendar className="header__btn--icon" />
               <span>Upcoming</span>
            </Link>
         </div>

         <div className="header__searchbox">
            <form onSubmit={submitHandler}>
               <input onChange={changeHandler} type="text" className="header__input" />
               <button className="header__search-btn">
                  <FaSearch />
               </button>
            </form>
         </div>
      </div>
   );
};

export default Header;
