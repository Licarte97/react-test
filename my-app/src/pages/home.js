import React, { useEffect, useState } from 'react';
import CountryList from "../components/CountryList";


const Home =  () => {

  const [loadedCountries, setLoadedCountries] = useState();

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

  return (
    <React.Fragment>

      {loadedCountries && <CountryList items={loadedCountries} />}
    </React.Fragment>
  );
};

export default Home;