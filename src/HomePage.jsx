import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchrecipe } from './redux/recipeSlicer';
import RecipeTitle from './components/RecipeTitle';
import RecipeImage from './components/RecipeImage';
import Button from './components/button';



const Homepage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.recipe)
  
  useEffect(() => {
    if (state.data.length === 0) {
    dispatch(fetchrecipe(0));
    }
  }, []);

  return (
    <div>
      {state.isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
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
        <Button total={state.data.total}/>
        </div>
      )}
    </div>
  );
};

export default Homepage;