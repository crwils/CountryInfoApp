import React from 'react';


const CountrySelector = ({countries, onCountrySelected, addFavouriteCountry}) => {
    
    const handleChange = function(event) {
        const chosenCountry = countries[event.target.value];
        onCountrySelected(chosenCountry);
    }

    const favCountry = function (event) {
        const chosenCountry = countries[event.target.value];
        addFavouriteCountry(chosenCountry);
    } 

    const countryOptions = countries.map((country, index) => {
        return <option value={index} key={index}>{country.name}</option>
    })
    


    return (
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose a Country</option>
            {countryOptions}
        </select>
        
    )
}

export default CountrySelector;