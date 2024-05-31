import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchrecipe } from './redux/recipeSlicer';
import RecipeTitle from './components/RecipeTitle';
import RecipeTime from './components/RecipeTime';
import RecipeDifficulty from './components/RecipeDiffuclty';
import RecipeImage from './components/RecipeImage';


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
        <div>
          {state.data.recipes.map((item, index) => (
            <div key={index}>
              <RecipeTitle name={item.name} />
              <RecipeTime time={item.prepTimeMinutes} />
              <RecipeDifficulty difficulty={item.difficulty} />
              <RecipeImage image={item.image} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Homepage;