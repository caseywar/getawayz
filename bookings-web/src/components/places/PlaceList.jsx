import React from 'react';
import PropTypes from 'prop-types';
import Place from './Place';
import style from '../../components/app/App.css';
import { Link } from 'react-router-dom';


const PlaceList = ({ places }) => (
    <>
      <h1 className={style.header}>GETAWAYZ</h1>
      <ul className={style.list}>
          {places.map((place) => (
            <Link to={`/places/${place.id}`} key={place.id}>
                <Place key={place.id} {...place} />
            </Link>
          ))}
      </ul>
  </>
)

PlaceList.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      pricePerNight: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      imageThumbnail: PropTypes.string.isRequired,
      maxGuests: PropTypes.number.isRequired,
      petFriendly: PropTypes.bool.isRequired,
      pool: PropTypes.bool.isRequired,
      wifi: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default PlaceList;
