import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setvisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(() => {
        const url = `https://restcountries.com/v3.1/all`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = country => {
        console.log('add this to your visited courtry');
        console.log(country);
        // visitedCountries.push(country);
        const newVisitedCountrues = [...visitedCountries, country];
        setvisitedCountries(newVisitedCountrues);
    }
    const handleVisitedFlags = flags => {
        console.log('add flags');
        const newVisitedFlags = [...visitedFlags, flags];
        setVisitedFlags(newVisitedFlags);
    }


    return (
        <div >
            <h2>Countries:{countries.length} </h2>
            {/* visited country */}
            <div>
                <h4>Visited Country List: {visitedCountries.length} </h4>
                <ul>
                    {
                        visitedCountries.map(country =>
                            <li key={country.ccsa3}>{country.name.common} </li>

                        )
                    }
                </ul>
            </div>

            {/* Visited Flags display */}
            <div className="flag-container">
                {
                    visitedFlags.map((flag, index) =>
                        <img key={index} src={flag} alt="" ></img>
                    )
                }
            </div>
            {/* display country */}
            <div className="country-container">
                {
                    countries.map(country =>
                        <Country
                            key={country.cca3}
                            handleVisitedFlags={handleVisitedFlags}
                            handleVisitedCountry={handleVisitedCountry}
                            country={country}></Country>
                    )
                }
            </div>
        </div>
    );
};

export default Countries;