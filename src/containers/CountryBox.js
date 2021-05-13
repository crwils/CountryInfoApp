import React, { useState, useEffect, Fragment } from 'react';
import CountrySelector from '../components/CountrySelect';
import CountryDetail from '../components/CountryDetail';
import FavouritesList from '../components/FavouritesList';
import "./CountryBox.css"

const CountryBox = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [favouriteCountries, setFavouriteCountries] = useState([]);

    useEffect(() => {
        getCountries();

    }, []);

    const getCountries = function () {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(countries => setCountries(countries))
    }

    const onCountrySelected = function (country) {
        setSelectedCountry(country)
    }

    const addFavouriteCountry = function (country) {
        const updatedFavourites = [...favouriteCountries, country]
        setFavouriteCountries(updatedFavourites)
    }

    return (
        <Fragment>
            <div className="container">
                <div className="country-list">
                    <CountrySelector countries={countries} onCountrySelected={onCountrySelected} addFavouriteCountry={addFavouriteCountry} />
                    {selectedCountry ? <CountryDetail countries={countries} favouriteCountries={favouriteCountries} addFavouriteCountry={addFavouriteCountry} selectedCountry={selectedCountry} /> : null}
                </div>
                <aside className="aside">
                    <div className="fav-list">
                        <u>Favourites:</u>
                        <FavouritesList favouriteCountries={favouriteCountries} />
                    </div>
                </aside>
            </div>
        </Fragment >
    )
}

export default CountryBox;