import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchrecipe } from './redux/recipeSlicer';
import RecipeTitle from './components/RecipeTitle';
import RecipeDifficulty from './components/RecipeDifficulty';
import RecipeImage from './components/RecipeImage';
import RecipeRating from './components/RecipeRating';


const Homepage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.recipe);

  useEffect(() => {
    dispatch(fetchrecipe());
  }, []);

  console.log(state)
  return (
    <div>
      {state.isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="columns is-multiline">
          {state.data.recipes.map((item, index) => (
            <div key={index} className="column is-4 box">
              <div className="content has-text-centered">
              <RecipeTitle name={item.name} id={item.id} />
              <RecipeDifficulty difficulty={item.difficulty} id={item.id} />
              <RecipeRating rating={item.rating} id={item.id} />
              <RecipeImage image={item.image} id={item.id} />
            </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Homepage;