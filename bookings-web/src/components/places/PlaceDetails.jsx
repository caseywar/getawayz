import React from 'react'
import PropTypes from 'prop-types'
import style from '../app/App.css';

function PlaceDetails({ place }) {
    return (
        <div className={style.descriptionContainer}>
            <div className={style.place}>
                <h1>{place.name}</h1>
                <li><span className={style.description}>{place.description}</span></li>
                <li>{place.location}</li>
                <li>{place.pricePerNight}</li>
                <div className={style.imageContainer}>
                <img src={place.image} alt={place.name} />
                <br></br>
                <img className={style.thumbnail} src={place.imageThumbnail} alt={place.name}/>
                </div> 
                <li>Max Guests: {place.maxGuests}</li>
                <li>{place.petFriendly ? 'Pet Friendly' : 'No Pets Allowed'}</li>
                {place.pool ? <li>Has a Pool!</li> : null}
                {place.wifi ? <li>Free Wifi</li> : null}      
    
                <a href="/">Back to Places</a>
          
            </div>
        </div>
    )
}

PlaceDetails.propTypes = {
    place: PropTypes.object.isRequired
};

export default PlaceDetails

