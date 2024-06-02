import React from 'react';

const RecipeRating = ({ rating }) => {
  return <span className="tag is-info">
    Rating: {rating}
  </span>;
};

export default RecipeRating;