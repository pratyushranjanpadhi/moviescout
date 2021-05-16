import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCastDetails } from "../../actions/castAction";
import Loader from "../Loader/Loader";
import { FaImdb } from "react-icons/fa";
import "./castDetails.scss";

const CastDetails = ({ id }) => {
   const dispatch = useDispatch();

   const castDetails = useSelector((state) => state.castDetails);
   const { loading, cast } = castDetails;

   useEffect(() => {
      dispatch(getCastDetails(id));
   }, [dispatch, id]);
   return (
      <div className="cast-details">
         {loading ? (
            <Loader />
         ) : (
            <div className="cast-details__main">
               <div className="cast-details__img-wrapper">
                  {cast.profile_path ? (
                     <img src={`${process.env.REACT_APP_IMAGE_URI}${cast.profile_path}`} alt="cast-pic" className="cast-details__img" />
                  ) : (
                     <img src="/default.png" alt="cast-pic" className="cast-details__img" />
                  )}
               </div>
               <div className="cast-details__bio-wrapper">
                  <h2 className="cast-details__name">{cast.name}</h2>
                  <h3 className="cast-details__born">
                     Born : <span>{cast.birthday}</span>
                  </h3>
                  <h3 className="cast-details__place">
                     Place : <span>{cast.place_of_birth}</span>
                  </h3>
                  <h3 className="cast-details__bio-heading">Biography</h3>
                  <p className="cast-details__biography">{cast.biography}</p>
                  <a href={`https://www.imdb.com/name/${cast.imdb_id}/`} rel="noreferrer" target="_blank" className="cast-details__imdblink">
                     <FaImdb className="details__imdblink--icon" />
                     IMDB
                  </a>
               </div>
            </div>
         )}
      </div>
   );
};

export default CastDetails;
