import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import RecipeTitle from './components/RecipeTitle';
import RecipeDifficulty from './components/RecipeDifficulty';
import RecipeRating from './components/RecipeRating';
import RecipeCuisine from './components/RecipeCuisine';
import RecipeImage from './components/RecipeImage';
import RecipeReview from './components/RecipeReview';
import RecipeServing from './components/RecipeServing';
import RecipeTime from './components/RecipeTime';
import RecipeInstruction from './components/RecipleInstruction';
import RecipeIngredient from './components/RecipeIngredient';

const SinglePage = () => {
  const { recipe_id } = useParams();

  const state = useSelector((state) => state.recipe);
// I need this since recipe_id is a string instead of an integer and find will return undefined
const numericRecipeId = parseInt(recipe_id, 10)
const selectedItem = state.data.recipes.find(recipe => recipe.id === numericRecipeId)

  console.log("Recipe ID:", recipe_id);
  console.log("All Recipes:", state.data.recipes);
  console.log("Selected Item:", selectedItem);

  
  return (
    <div>
      {state.isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
        <RecipeTitle name={selectedItem.name} id={selectedItem.id} />
        <RecipeDifficulty difficulty={selectedItem.difficulty} />
        <RecipeRating rating={selectedItem.rating} />
        <RecipeCuisine cuisine={selectedItem.cuisine} />
        <RecipeReview review={selectedItem.reviewCount} />
        <RecipeServing serving={selectedItem.servings} />
        <RecipeTime time={selectedItem.prepTimeMinutes} />
        <RecipeImage image={selectedItem.image} />
        <RecipeIngredient ingredient={selectedItem.ingredients} />
        <RecipeInstruction instruction={selectedItem.instructions} />
        </div>
      )}
    </div>
  );
};

export default SinglePage;