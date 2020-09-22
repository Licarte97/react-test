import React, { useEffect, useState } from 'react';
import CountryList from "../components/CountryList";
import LoadingSpinner from "../components/UIElements/LoadingSpinner";

const Home =  () => {
  let filteredCountries;
  const [loadedCountries, setLoadedCountries] = useState();
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);


  useEffect( () => {
    const sendRequest = async () => {

      try {
        setIsLoading(true);
        const response = await fetch(' https://restcountries.eu/rest/v2/all');
        const responseData = await response.json();
        console.log(responseData);
        setLoadedCountries(responseData);
        setIsLoading(false);
        
      } catch(err){
        console.log(err);
        setIsLoading(false);
        setError(err.message || 'Something went wrong, please try again later');
        
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
      {isLoading && <LoadingSpinner asOverlay/>}
      {!isLoading && <input type="text" placeholder="Search" onChange={inputHandler}></input>}
      {!isLoading && loadedCountries && <CountryList items={filteredCountries} />}
    </React.Fragment>
  );
};

export default Home;