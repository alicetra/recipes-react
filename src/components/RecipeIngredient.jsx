import React from 'react';

const RecipeIngredients = ({ ingredient }) => {
  return (
    <div>
      <p className="subtitle is-5">Ingredients:</p>
      <div>
        {ingredient.map((ingredient, index) => (
          <div key={index} >
            <label className="checkbox ">
            <input type="checkbox" />
             </label> {ingredient}</div>
        ))}
      </div>
    </div>
  );
};

export default RecipeIngredients