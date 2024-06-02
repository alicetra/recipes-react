import React from 'react';

const RecipeServing = ({ serving }) => {
  return <span className="tag is-warning">
    Serving: {serving}
  </span>;
};

export default RecipeServing;