import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SinglePage = () => {
  const { recipe_id } = useParams();

  const state = useSelector((state) => state.recipe);

  const selectedItem = state.data.recipes[recipe_id];

  console.log("Recipe ID:", recipe_id);
  console.log("All Recipes:", state.data.recipes);
  console.log("Selected Item:", selectedItem);

  if (!selectedItem) {
    return <div>Item not found.</div>;
  }
}

export default SinglePage;