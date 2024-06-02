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
import NavBar from './components/NavBar';


const SinglePage = () => {
  // the reason why recipe_id is already set in the Params is because I passed the item.id data from the homepage to the RecipeTitle component
  const { recipe_id } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.singleRecipe);
  const recipe = state.data[recipe_id];

  useEffect(() => {
    // only fetch if we don't already have the recipe key (eg the id) in our state which is keeping a memory of all the recipes user clicked on.
    if (!(recipe_id in state.data)) {
      dispatch(fetchsinglerecipe(recipe_id));
    }
  }, [dispatch, recipe_id, state.data]);


  if (state.error) {
    return (
      <div className="container" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", minWidth: "100vw" }}>
        <div className="column is-half has-text-centered">
          <h1 className="title is-1">Oops something went wrong: {state.error.message}</h1>
        </div>
      </div>
    );
  }
  
  // the or statement is there because on loading if user client on recipe id 1 and then recipe id 2 our recipe id number 2 doesn't exist as of yet
  // in our state and the code jumps straight to the below lines and break the page
  if (state.isLoading || !recipe) {
    return (
      <div className="container" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", minWidth: "100vw" }}>
        <div className="column is-half has-text-centered">
          <h1 className="title is-1">Loading...</h1>
        </div>
      </div>
    );
  }


  return (
    <div>
      <NavBar />
      <div className="container has-text-centered" style={{ marginTop: "10vh" }}>
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

          <div className="columns">
            <div className="column is-half">
              <RecipeIngredient ingredient={recipe.ingredients} />
            </div>

            <div className="column is-one-third">
              <RecipeInstruction instruction={recipe.instructions} />
            </div>
          </div>

        </div>
      </div>
    </div>


  );

};

export default SinglePage;