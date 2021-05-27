import React from 'react';
import PropTypes from 'prop-types';
import style from '../../components/app/App.css';
import { Link } from 'react-router-dom';



const Place = ({
  name,
  description,
  location,
  pricePerNight,
  image,
  imageThumbnail,
  maxGuests,
  petFriendly,
  pool,
  wifi,
}) => {
  return (
    <ul className={style.place}>
        <h1>{name}</h1>
        <li><span className={style.description}>{description}</span></li>
        <li>{location}</li>
        <li>{pricePerNight}</li>
        <div className={style.imageContainer}>
        <img src={image} alt={name} />
         <br></br>
        <img className={style.thumbnail} src={imageThumbnail} alt={name}/>
        </div> 
        <li>Max Guests: {maxGuests}</li>
        <li>{petFriendly ? 'Pet Friendly' : 'No Pets Allowed'}</li>
        {pool ? <li>Has a Pool!</li> : null}
        {wifi ? <li>Free Wifi</li> : null}
    </ul>
  );
};

Place.propTypes = {
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
};

export default Place;
