import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import "./movieDetails.scss";
import { getMovieDetails } from "../../actions/moviesActions";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const MovieDetails = ({ id }) => {
   const [delay, setDelay] = useState(true);
   const dispatch = useDispatch();

   const movieDetails = useSelector((state) => state.movieDetails);
   const { loading, movie } = movieDetails;

   useEffect(() => {
      dispatch(getMovieDetails(id));
      setTimeout(() => {
         setDelay(false);
      }, 3000);
   }, [dispatch, id]);

   const renderGenres = (genres) => {
      return genres.map((genre) => {
         return (
            <Link to={`/movies/${genre.name}`} className="details__genrebox">
               {genre.name}
            </Link>
         );
      });
   };
   return (
      <>
         {loading ? (
            <Loader />
         ) : (
            <div className="details">
               <div className="details__cover">
                  <img src={`${process.env.REACT_APP_IMAGE_URI}${movie.backdrop_path}`} alt="" />
               </div>
               <img src={`${process.env.REACT_APP_IMAGE_URI}${movie.poster_path}`} alt="" className="details__poster" />
               <div className="details__heading-wraper">
                  <h2 className="details__heading">
                     {movie.title} <span>{`(${new Date(movie.release_date).getFullYear()})`}</span>{" "}
                  </h2>
                  <h3 className="details__tagline">{movie.tagline}</h3>
                  <div className="details__rating-wrapper">
                     <div className="details__starbox">
                        <ReactStars
                           count={5}
                           value={movie.vote_average / 2}
                           edit={false}
                           isHalf={true}
                           size={24}
                           color="#fff"
                           activeColor="#ffd700"
                        />
                        <p>{movie.vote_average}</p>
                     </div>
                     <div className="details__ratingbox">{`${movie.vote_count} reviews`}</div>
                  </div>
                  <div className="details__genrewrapper">{renderGenres(movie.genres)}</div>
                  <div className="details__synopsis">
                     <h3>Overview</h3>
                     <p>{movie.overview}</p>
                  </div>
                  <div className="details__linkbox">
                     <a href={`https://www.imdb.com/title/${movie.imdb_id}/`} target="_blank" className="details__imdblink">
                        IMDB
                     </a>
                     <a href={`${movie.homepage}`} target="_blank" className="details__imdblink">
                        Website
                     </a>
                  </div>
               </div>
            </div>
         )}
      </>
   );
};

export default MovieDetails;
