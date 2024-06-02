import React from 'react';

const RecipeImage = ({ image }) => {
  return <figure><img src={image} alt="recipe image" /> </figure>;
};

export default RecipeImage;