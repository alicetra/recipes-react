import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import RecipeTitle from './components/RecipeTitle';
import RecipeDifficulty from './components/RecipeDifficulty';
import RecipeRating from './components/RecipeRating';
import RecipeCuisine from './components/RecipeCuisine';
import RecipeImage from './components/RecipeImage';
import RecipeReview from './components/RecipeReview';
import RecipeServing from './components/RecipeServing';
import RecipeTime from './components/RecipeTime';
import RecipeInstruction from './components/RecipeInstruction';
import RecipeIngredient from './components/RecipeIngredient';
import { fetchsinglerecipe } from './redux/singleRecipeSlicer';

const SinglePage = () => {
  const { recipe_id } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.singleRecipe);
  const recipe = state.data[recipe_id];

  console.log(state)

  useEffect(() => {
    if (!(recipe_id in state.data)) {
      dispatch(fetchsinglerecipe(recipe_id));
    }
  }, [dispatch, recipe_id, state.data]);

  if (state.isLoading || !recipe) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <RecipeTitle name={recipe.name} id={recipe.id} />
      <RecipeDifficulty difficulty={recipe.difficulty} />
      <RecipeRating rating={recipe.rating} />
      <RecipeCuisine cuisine={recipe.cuisine} />
      <RecipeReview review={recipe.reviewCount} />
      <RecipeServing serving={recipe.servings} />
      <RecipeTime time={recipe.prepTimeMinutes} />
      <RecipeImage image={recipe.image} />
      <RecipeIngredient ingredient={recipe.ingredients} />
      <RecipeInstruction instruction={recipe.instructions} />
    </div>
  );
};

export default SinglePage;