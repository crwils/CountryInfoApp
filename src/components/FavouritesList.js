import React from 'react';

const FavouritesList = ({ favouriteCountries }) => {


    const favCountries = favouriteCountries.map((country, index) => {
        return (
                <li value={index} key={index}>{country.name}</li>
        )
    })

    return (
        <div>{favCountries}</div>
    )

}

export default FavouritesList;