import React from 'react';
import './countryDetail.css';


const CountryDetail = ({ selectedCountry, addFavouriteCountry, favouriteCountries, countries }) => {

    const handleButtonSubmit = () => {
        // if selected country is not in selected countries list, then add to fav country
        if (!favouriteCountries.includes(selectedCountry)) {
            addFavouriteCountry(selectedCountry);
        }
    }

    const countryLanguages = selectedCountry.languages.map(language => {
        return `${language.name}`
    })

    const joined = countryLanguages.join(", ")

    const neebs = selectedCountry.borders.map(alpha3code => {
        const country = countries.find(findCountry => findCountry.alpha3Code === alpha3code)
            return <li className='neebs-li'> {country.name} </li>  
    })

    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    const pop = formatNumber(selectedCountry.population)
    
    return (
        <div className="detail-box">
            <h2>{selectedCountry.name}</h2>
            <img width="200" height="100" src={selectedCountry.flag} alt={selectedCountry.name} />
            <p><b>Population:</b> {pop}</p>
            <p><b>Continent:</b> {selectedCountry.region}</p>
            <p><b>Capital:</b> {selectedCountry.capital}</p>
            <p><b>Languages:</b> {joined}</p>
            <p><b>Neighbouring Countries:</b></p>
            <p>{neebs}</p>
            <button onClick={handleButtonSubmit}>Add Favourite</button>
        </div>
    )
}


export default CountryDetail;


   // const neebs = selectedCountry.borders.map(alpha3code => {
    //     return findNeebs(alpha3code)    
    //     })




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