import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchrecipe } from './redux/recipeSlicer';
import RecipeTitle from './components/RecipeTitle';
import RecipeImage from './components/RecipeImage';
import Pagination from './components/Pagination';
import NavBar from './components/NavBar';



const Homepage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.recipe)
  console.log(state)

  useEffect(() => {
    if (!(state.currentPage in state.data)) {
      dispatch(fetchrecipe(0));
    }
  }, []);

  if (state.error) {
    return (
      <div className="columns is-centered" style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <div className="column is-half has-text-centered">
          <h1 className="title is-1">Oops something went wrong: {state.error.message}</h1>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container" style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      {state.isLoading ? (
        <div className="columns is-centered" style={{ width: "100%" }}>
          <div className="column is-half has-text-centered">
            <h1 className="title is-1">Loading...</h1>
          </div>
        </div>
      ) : (
        <div>
          <NavBar />
          <div className="columns is-multiline is-centered" style={{ width: "100%" }}>
            {state.data[state.currentPage].map((item, index) => (
              <div key={index} className="column is-4">
                <div className="content has-text-centered">
                  <RecipeTitle name={item.name} id={item.id} />
                  <RecipeImage image={item.image} />
                </div>
              </div>
            ))}
          </div>
          <Pagination total={state.totalRecipe} />
        </div>
      )}
    </div>
  )
};

export default Homepage;