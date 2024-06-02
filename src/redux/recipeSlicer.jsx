import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchrecipe = createAsyncThunk("fetchrecipe", async (skip) => {
  const data = await fetch(`https://dummyjson.com/recipes?limit=12&skip=${skip}&select=name,image`)
  return data.json()
})


const POSTS_PER_PAGE = 12;

const recipeSlice = createSlice({

  name: "recipe",
  initialState: {
    isLoading: true,
    data: {},
    error: false,
    currentPage: 1,
    totalRecipe: 0
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchrecipe.pending, (state, action) => {
      state.isLoading = true
    });
    builder.addCase(fetchrecipe.fulfilled, (state, action) => {
      state.isLoading = false
      state.currentPage = (action.payload.skip / 12) + 1
      state.data[state.currentPage] = action.payload.recipes
      state.totalRecipe = action.payload.total

    });
    builder.addCase(fetchrecipe.rejected, (state, action) => {
      console.log(action)
      state.error = true
    })
  }
})

export const { setCurrentPage, visitedPages } = recipeSlice.actions
export default recipeSlice.reducer