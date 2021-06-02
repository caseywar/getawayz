export const getPlaces = async () => {
  //had to change the url to a normal url because the BASE_URL wouldnt work for testing
  const response = await fetch('http://localhost:7890/api/v1/places');
  if (response.ok) {
    const result = await response.json();
    return result.map(
      ({
        price_per_night,
        image_thumbnail,
        max_guests,
        pet_friendly,
        ...place
      }) => ({
        ...place,
        pricePerNight: price_per_night,
        imageThumbnail: image_thumbnail,
        maxGuests: max_guests,
        petFriendly: pet_friendly,
      })
    );
  } else {
    throw new Error(await response.json());
  }
};

export const findPlaceById = async (id) => {
  const res = await fetch(`${process.env.BASE_URL}/places/${id}`);

  const result = await res.json();

  const newResult = {
    ...result,
    pricePerNight: result.price_per_night,
    imageThumbnail: result.image_thumbnail,
    maxGuests: result.max_guests,
    petFriendly: result.pet_friendly,
  }

  return newResult;
  
}
