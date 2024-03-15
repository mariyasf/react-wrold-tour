import { useEffect, useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    console.log(country);
    const { name, flags, population, area, cca3 } = country;

    const [Visit, setVisit] = useState(0);
    const handleVisited = () => {
        setVisit(!Visit);
    }
    // console.log(handlevisitedCountries);




    return (
        <div className={`countryStyle ${Visit && 'visited'}`}>
            <h2>Name: {name?.common}</h2>
            <img src={flags.png} alt="" />
            <h3>Population: {population}</h3>
            <h3>Area: {area}</h3>
            <p><small>Code: {cca3}</small></p>

            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flags</button>
            <hr />

            <button onClick={handleVisited} >{Visit ? 'Visited' : 'Going'}</button>
            {Visit ? 'I have Visited this country' : 'I want to visit'}
        </div>
    );
};

export default Country;