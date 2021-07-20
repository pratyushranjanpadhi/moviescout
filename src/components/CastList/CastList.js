import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './castList.scss';
import { getCastList } from '../../actions/castAction';
import Slider from 'react-slick';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';

const CastList = ({ id }) => {
  const dispatch = useDispatch();
  const castList = useSelector((state) => state.castList);
  const { loading, casts } = castList;
  console.log(casts);
  useEffect(() => {
    dispatch(getCastList(id));
  }, [dispatch, id]);

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: -2,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const renderCast = (casts) => {
    return casts.map((cast) => {
      return (
        <Link className="slider__link" to={`/cast/${cast.id}`} key={cast.id}>
          <img src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} alt="" className="slider__image" />
          <div className="slider__textarea">
            <span className="slider__mov-name">{cast.character}</span>
            <span className="slider__or-name">{cast.name}</span>
          </div>
        </Link>
      );
    });
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="slider-box">
          <h3 className="slider-heading">The Cast :</h3>
          <div className="slider-container">
            <Slider className="slider" {...settings}>
              {renderCast(casts)}
            </Slider>
          </div>
        </div>
      )}
    </>
  );
};

export default CastList;
