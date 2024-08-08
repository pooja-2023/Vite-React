import React from 'react'

const Joke = ({items}) => {
  return(
    <ul>
      {items.map((item,index) => (
        <li key = {index}>{item}</li>
      ))}
    </ul>
  );
};

export default Joke;