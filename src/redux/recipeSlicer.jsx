import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

export const fetchrecipe = createAsyncThunk("fetchrecipe", async () => {
    const data = await fetch('https://dummyjson.com/recipes')
    return data.json()
})

const recipeSlice = createSlice ({
    name :"recipe",
    initialState : {
        isLoading: true,
        data: [],
        error: false,
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

export default recipeSlice.reducer