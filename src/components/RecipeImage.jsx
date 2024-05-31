import React from 'react';

const RecipeImage = ({image}) => {
  return <figure className="image is-1by1"><img src={image} alt="recipe image" /> </figure>;
};

export default RecipeImage;