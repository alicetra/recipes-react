import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchrecipe } from './redux/recipeSlicer';
import RecipeTitle from './components/RecipeTitle';
import RecipeImage from './components/RecipeImage';
import Button from './components/Button';

const Homepage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.recipe);
  console.log(state.data.total)

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
          <div className="column is-three-quarter">
          <div className="box">
          <nav role="navigation" aria-label="pagination">
           <Button total={state.data.total} />
           </nav>
        </div>
        </div>
        </div>
      )}
    </div>
  );
};


export default Homepage