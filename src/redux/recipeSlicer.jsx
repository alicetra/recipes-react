import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// Skip has to be dinamyc in order to fetch according to the page you click on. Skip is being passed on in the Pagination component.
export const fetchrecipe = createAsyncThunk("fetchrecipe", async (skip) => {
  const data = await fetch(`https://dummyjson.com/recipes?limit=12&skip=${skip}&select=name,image`);
  if (data.status === 200) {
    return data.json();
  } else {
    throw new Error(data.status)
  }
})


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
      //calculate the curent page directly upon fulfilment has this is not happened in my Pagination component if another fetch is no needed and we have the page data in store. 
      state.currentPage = (action.payload.skip / 12) + 1
      //take the curent page as a key and save the payload of each page at loading when user click. This allowed us not to fetch page data if it already occured.
      state.data[state.currentPage] = action.payload.recipes
      state.totalRecipe = action.payload.total

    });
    builder.addCase(fetchrecipe.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error
    })
  }
})

export const { setCurrentPage, visitedPages } = recipeSlice.actions
export default recipeSlice.reducer