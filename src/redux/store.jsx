import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from './recipeSlicer';
import singleRecipeReducer from './singleRecipeSlicer';

export const store = configureStore({
    reducer: {
    recipe: recipeReducer,
    singleRecipe:singleRecipeReducer
    }

}) 
