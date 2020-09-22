import React, { useEffect, useState } from 'react';
import CountryList from "../components/CountryList";

const Home =  () => {
  let filteredCountries;
  const [loadedCountries, setLoadedCountries] = useState();
  const [search, setSearch] = useState('');


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
    filteredCountries = loadedCountries.filter( country => {
      return country.name.toLowerCase().includes( search.toLowerCase() )
    })
  };

  const inputHandler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <React.Fragment>
      <input type="text" placeholder="Search" onChange={inputHandler}></input>
      {loadedCountries && <CountryList items={filteredCountries} />}
    </React.Fragment>
  );
};

export default Home;