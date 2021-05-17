import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./movieList.scss";

import { getMoviesList } from "../../actions/moviesActions";

import Loader from "../Loader/Loader";
import { genres } from "../../components/Sidebar/genres";

const MovieList = ({ genre, movieId, page, filteredKeyword }) => {
   const dispatch = useDispatch();
   let genreId;

   if (genre) {
      const { id } = genres.find((item) => item.name === genre);
      genreId = id;
   }

   const movieList = useSelector((state) => state.movieList);
   const { movies, loading } = movieList;

   useEffect(() => {
      if (movieId) {
         dispatch(getMoviesList(null, movieId));
      } else if (genreId) {
         dispatch(getMoviesList(genreId, null, null, page));
      } else if (filteredKeyword) {
         dispatch(getMoviesList(null, null, filteredKeyword, page));
      } else {
         dispatch(getMoviesList(null, null, null, page));
      }
   }, [dispatch, genreId, movieId, page, filteredKeyword]);

   const renderMovies = () => {
      return movies.map((movie) => {
         return (
            <Link to={`/movie/${movie.id}`} key={movie.id} className="container">
               <div className="image">
                  <img src={`${process.env.REACT_APP_IMAGE_URI}${movie.poster_path}`} alt={movie.title} />
               </div>
               <div className="title">
                  <h2>{movie.title}</h2>
               </div>
            </Link>
         );
      });
   };
   return <div className="main-list">{loading ? <Loader /> : renderMovies()}</div>;
};

export default MovieList;
