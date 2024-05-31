import React from 'react';
import { Link } from 'react-router-dom';

const RecipeTitle = ({ name, id }) => {
  return (
    <Link to={`/${id}`}>
      <h2>{name}</h2>
    </Link>
  );
};

export default RecipeTitle