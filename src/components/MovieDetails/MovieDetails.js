import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import './movieDetails.scss';
import { getMovieDetails, getMovieVideo } from '../../actions/moviesActions';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
import { FaImdb, FaLink } from 'react-icons/fa';
import { FcLike } from 'react-icons/fc';
import CastList from '../CastList/CastList';

const MovieDetails = ({ id }) => {
  const dispatch = useDispatch();

  const movieDetails = useSelector((state) => state.movieDetails);
  const { loading, movie } = movieDetails;

  const movieVideo = useSelector((state) => state.movieVideo);
  const { videos } = movieVideo;

  useEffect(() => {
    dispatch(getMovieDetails(id));
    dispatch(getMovieVideo(id));
  }, [dispatch, id]);

  const renderGenres = (genres) => {
    return genres.map((genre) => {
      return (
        <Link key={genre.id} to={`/movies/${genre.name}`} className="details__genrebox">
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
        <>
          <div className="details">
            <div className="details__cover">
              <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="cover-pic" />
            </div>

            {/* First Wrapper Div */}
            <div className="details__first-wrapper mb-large">
              <div className="details__img-wrapper">
                <img src={`${process.env.REACT_APP_IMAGE_URI}${movie.poster_path}`} alt="poster-pic" className="details__poster" />
              </div>
              <div className="details__heading-wraper">
                <h2 className="details__heading">
                  {movie.title} <span>{`(${new Date(movie.release_date).getFullYear()})`}</span>{' '}
                </h2>
                <h3 className="details__tagline">{movie.tagline}</h3>
                <div className="details__rating-wrapper">
                  <div className="details__starbox">
                    <ReactStars count={5} value={movie.vote_average / 2} edit={false} isHalf={true} size={24} color="#fff" activeColor="#ffd700" />
                    <p>{movie.vote_average}</p>
                  </div>
                  <div className="details__ratingbox">
                    {`${movie.vote_count} reviews`} <FcLike className="details__ratingbox--icon" />
                  </div>
                </div>
                <div className="details__genrewrapper">{renderGenres(movie.genres)}</div>
                <div className="details__synopsis">
                  <h3>Overview</h3>
                  <p>{movie.overview}</p>
                </div>
                <div className="details__linkbox">
                  <a href={`https://www.imdb.com/title/${movie.imdb_id}/`} rel="noreferrer" target="_blank" className="details__imdblink">
                    <FaImdb className="details__imdblink--icon" />
                    IMDB
                  </a>
                  <a href={`${movie.homepage}`} target="_blank" rel="noreferrer" className="details__imdblink">
                    <FaLink className="details__imdblink--icon" />
                    Website
                  </a>
                </div>
              </div>
            </div>

            {/* Second Wrapper Div */}
            <div className="details__second-wrapper mb-medium">
              <CastList id={id} />
              <div className="details__misc-data">
                <div className="details__misc-data--data-box">
                  <h3>Status</h3>
                  <p>{movie.status}</p>
                </div>
                <div className="details__misc-data--data-box">
                  <h3>Runtime</h3>
                  <p>{movie.runtime} min</p>
                </div>
                <div className="details__misc-data--data-box">
                  <h3>Language</h3>
                  <p>{movie.original_language}</p>
                </div>
                <div className="details__misc-data--data-box">
                  <h3>Release Date</h3>
                  <p>{movie.release_date}</p>
                </div>
                <div className="details__misc-data--data-box">
                  <h3>Budget</h3>
                  <p>${movie.budget}</p>
                </div>
                <div className="details__misc-data--data-box">
                  <h3>Box Office Collection</h3>
                  <p>${movie.revenue}</p>
                </div>
              </div>
            </div>

            {/* Third Wrapper Div */}
            <div className="details__third-wrapper mb-large">
              {videos[0] ? (
                <iframe
                  src={`https://www.youtube.com/embed/${videos[0].key}/`}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              ) : (
                <div className="details__third-wrapper--fallback">
                  <h2>No Videos Found</h2>
                </div>
              )}
            </div>

            {/* Fourth Wrapper Div */}
            <div className="details__fourth-wrapper mb-small">
              <h3>Recomended Movies :</h3>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetails;
