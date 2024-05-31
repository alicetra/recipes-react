import React from 'react';

const RecipeTitle = ({name, id}) => {
  return <h2 onClick={() => console.log(id)}>{name}</h2>;
};

export default RecipeTitle;