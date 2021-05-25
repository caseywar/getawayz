import React, { useState, useEffect } from 'react';
import { findPlaceById } from '../services/placesApi';
import PlaceDetails from '../components/places/PlaceDetails';

const DetailsContainer = ({ match }) => {
    const [place, setPlace] = useState({});

    useEffect(() => {
        findPlaceById(match.params.id)
        .then(setPlace);
    }, []);
    return <PlaceDetails place={place} />
};

export default DetailsContainer;