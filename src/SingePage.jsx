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
import Navtest from './components/nav';
const SinglePage = () => {
  const { recipe_id } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.singleRecipe);
  const recipe = state.data[recipe_id];


  useEffect(() => {
    if (!(recipe_id in state.data)) {
      dispatch(fetchsinglerecipe(recipe_id));
    }
  }, [dispatch, recipe_id, state.data]);

  if (state.isLoading || !recipe) {
    return <h1 className="title is-1">Loading...</h1>;
  }


  return (
    <div>
    <Navtest />
    <div className="container has-text-centered">
    <h1 className="title">
      <RecipeTitle name={recipe.name} id={recipe.id} />
      </h1>
      <div className="tags are-medium is-centered">
      <RecipeDifficulty difficulty={recipe.difficulty} />
      <RecipeRating rating={recipe.rating} />
      <RecipeCuisine cuisine={recipe.cuisine} />
      <RecipeReview review={recipe.reviewCount} />
      <RecipeServing serving={recipe.servings} />
      <RecipeTime time={recipe.prepTimeMinutes} />
      </div>
  
      <RecipeImage image={recipe.image} />
      <div className="container has-text-centered">

      <div class="columns">
      <div class="column is-half">
      <RecipeIngredient ingredient={recipe.ingredients} />
      </div>

      <div class="column is-one-third">
      <RecipeInstruction instruction={recipe.instructions} />
      </div>
      </div>

      </div>
      </div>
      </div>

  
  );
  
};

export default SinglePage;