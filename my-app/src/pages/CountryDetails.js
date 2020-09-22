import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, useHistory} from 'react-router-dom';
import { Button } from 'react-bootstrap';

import "./CountryDetails.css";

import Country from "../components/Country";
const CountryDetails = () => {

  let filteredCountries;
  const [loadedCountries, setLoadedCountries] = useState();
  const countryName = useParams().cName;
  

  useEffect( () => {
    const sendRequest = async () => {

      try {
        const response = await fetch(' https://restcountries.eu/rest/v2/all');
        const responseData = await response.json();
        console.log(responseData);
        setLoadedCountries(responseData);

      } catch(err){
        console.log(err);
      }
      
    };
    sendRequest();
  },[]);

  if(loadedCountries)
  {
    console.log("searching loaded countries");
    filteredCountries = loadedCountries.filter( country => {
      return country.name.toLowerCase().includes( countryName.toLowerCase() )
    })
  };



  return (
    <React.Fragment>
      {loadedCountries && <Country items={filteredCountries} />}
    </React.Fragment>
  );
};

export default CountryDetails;