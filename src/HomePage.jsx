import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchrecipe } from './redux/recipeSlicer';
import RecipeTitle from './components/RecipeTitle';
import RecipeImage from './components/RecipeImage';

const Homepage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.recipe);

  useEffect(() => {
    if (state.data.length === 0) {
    dispatch(fetchrecipe());
    }
  }, []);

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
              <RecipeImage image={item.image}  />
            </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Homepage;