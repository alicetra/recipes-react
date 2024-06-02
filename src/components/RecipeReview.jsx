import React from 'react';

const RecipeReview = ({ review }) => {
  return <span className="tag is-success">
    Review Count: {review}
  </span>;
};

export default RecipeReview;