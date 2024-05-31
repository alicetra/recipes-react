import React from 'react';

const RecipeDifficulty = ({difficulty,OnClick}) => {
  return <div onClick={OnClick} >Difficult: {difficulty} </div>;
};

export default RecipeDifficulty;