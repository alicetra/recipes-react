import React from 'react';

const RecipeCuisine = ({ cuisine }) => {
  return <span className="tag is-black">
    Cuisine: {cuisine}
  </span>;
};

export default RecipeCuisine;