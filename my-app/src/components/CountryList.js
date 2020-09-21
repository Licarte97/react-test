import React from 'react';

const CountryList = props => {

    console.log(props);
  return (
    <ul>
      {props.items.map(item => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
};

export default CountryList;