import React from 'react';

const RecipeDifficulty = ({difficulty,id}) => {
  return <div onClick={() => console.log(id)}>Difficult: {difficulty} </div>;
};

export default RecipeDifficulty;