import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SinglePage = () => {
  const { recipe_id } = useParams();

  const state = useSelector((state) => state.recipe);
// I need this since recipe_id is a string instead of an integer and find will return undefined
const numericRecipeId = parseInt(recipe_id, 10)
const selectedItem = state.data.recipes.find(recipe => recipe.id === numericRecipeId)

  console.log("Recipe ID:", recipe_id);
  console.log("All Recipes:", state.data.recipes);
  console.log("Selected Item:", selectedItem);

  if (!selectedItem) {
    return <div>Item not found.</div>;
  }
}

export default SinglePage;