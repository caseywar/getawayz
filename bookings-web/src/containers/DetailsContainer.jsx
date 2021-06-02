import React, { useState, useEffect } from 'react';
import { findPlaceById } from '../services/placesApi';
import PlaceDetails from '../components/places/PlaceDetails';

const DetailsContainer = ({ match }) => {
    const [place, setPlace] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        findPlaceById(match.params.id)
        .then(setPlace)
        .finally(() => setLoading(false))
    }, []);

    if (loading) return <h1>Loading...</h1>

    return <PlaceDetails place={place} />
};

export default DetailsContainer;