import React from 'react';
import './'


const CountryDetail = ({ selectedCountry, addFavouriteCountry, favouriteCountries, countries }) => {

    const handleButtonSubmit = () => {
        // if selected country is not in selected countries list, then add to fav country
        if (!favouriteCountries.includes(selectedCountry)) {
            addFavouriteCountry(selectedCountry);
        }

    }
    
    const neebs = selectedCountry.borders.map(alpha3code => {
        
        return (
            <p>{alpha3code}</p>
            )
        })
        
        return (
            <div>
                <h3>{selectedCountry.name}</h3>
                <p>Population: {selectedCountry.population}</p>
                <p>Capital: {selectedCountry.capital}</p>
                <img width="200" height="100" src={selectedCountry.flag} alt={selectedCountry.name} />
                <p>Neighbouring Countries:</p>
                <p>{neebs}</p>
                <button onClick={handleButtonSubmit}>Add to favourites</button>
            </div>
    )
}


export default CountryDetail;







// first step: list all the alpha3codes in selectedCountry.borders 

// for (let i=0; i<selectedCountry.length; i++)
// let country = selectedCountry.name



// if selectedCountry.borders === countries.alpha3code
// return countries.name



// const countryList = countries.map((country) => {
    //     const countryName = country.name
    //     const countryCode = country.alpha3code
    //     if (neebs.alpha3code === countryCode) {
        //         return <p>{countryName}</p>
//     }
// })
// for (let country in countries){
//     const countryName = country.name
//     const countryCode = country.alpha3code
//     if (neebs.alpha3code === countryCode) {
//         return <p>{countryName}</p>
//     }