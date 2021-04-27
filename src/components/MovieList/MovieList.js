import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./movieList.scss";

import { getMoviesList } from "../../actions/moviesActions";

const MovieList = () => {
   // const [movies, setMovies] = useState([]);

   const dispatch = useDispatch();
   // const movies = [];

   const { movies } = useSelector((state) => state.movieList);

   useEffect(() => {
      dispatch(getMoviesList());
   }, [dispatch]);

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
   return <div className="main-list">{renderMovies()}</div>;
};

export default MovieList;
