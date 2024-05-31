import React from 'react';

const RecipeImage = ({image, id}) => {
  return <figure className="image is-1by1" onClick={() => console.log(id)} ><img src={image} alt="recipe image" /> </figure>;
};

export default RecipeImage;