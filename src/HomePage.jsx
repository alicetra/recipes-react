import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchrecipe } from './redux/recipeSlicer';
import RecipeTitle from './components/RecipeTitle';
import RecipeImage from './components/RecipeImage';
import Button from './components/button';
import Navtest from './components/nav';



const Homepage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.recipe)
  console.log(state)
  
  useEffect(() => {
    if (!(state.currentPage in state.data)) {
    dispatch(fetchrecipe(0));
    }
  }, []);


  return (
    <div className="container">
      {state.isLoading ? (
        <div className="column">
        <h1 className="title is-1">Loading...</h1>
         </div>
      ) : (
        <div>
          <Navtest />
        <div className="columns is-multiline">
          {state.data[state.currentPage].map((item, index) => (
            <div key={index} className="column is-4 ">
              <div className="content has-text-centered">
              <RecipeTitle name={item.name} id={item.id} />
              <RecipeImage image={item.image}  />
            </div>
            </div>
          ))}
          
        </div>
        <Button total={state.totalRecipe}/>
        </div>
      )}
    </div>
  );
};

export default Homepage;