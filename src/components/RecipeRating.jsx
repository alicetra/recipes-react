import React from 'react';

const RecipeRating = ({rating,id}) => {
  return <div onClick={() => console.log(id)}>Rating: {rating}</div>;
};

export default RecipeRating;