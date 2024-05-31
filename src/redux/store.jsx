import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from './recipeSlicer';

export const store = configureStore({
    reducer: {
    recipe: recipeReducer
    }

}) 

