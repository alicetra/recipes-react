import React from 'react';

const RecipeTime = ({ time }) => {
  return <span className="tag is-danger">
    Cooking time: {time} minutes
  </span>;
};

export default RecipeTime;