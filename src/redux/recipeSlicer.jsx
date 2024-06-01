import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

export const fetchrecipe = createAsyncThunk("fetchrecipe", async (skip) => {
    const data = await fetch(`https://dummyjson.com/recipes?limit=12&skip=${skip}&select=name,image`)
    return data.json()
})

const POSTS_PER_PAGE = 12

const recipeSlice = createSlice ({
    
    name :"recipe",
    initialState : {
        isLoading: true,
        data: [],
        error: false,
        currentPage: 1
    },
    reducers: {
        setCurrentPage: (state, action) => {
          state.currentPage = action.payload;
        },
      },
    extraReducers: (builder) => {
        builder.addCase(fetchrecipe.pending, (state,action) => {
        state.isLoading = true
        });
        builder.addCase(fetchrecipe.fulfilled, (state,action) => {
        state.isLoading = false
        state.data = action.payload
        });
        builder.addCase(fetchrecipe.rejected, (state,action) => {
        console.log(action)
        state.error = true
        })
    }
})

export const { setCurrentPage} = recipeSlice.actions
export default recipeSlice.reducer