import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

export const fetchsinglerecipe = createAsyncThunk("fetchsinglerecipe", async (recipeId) => {
    const data = await fetch('https://dummyjson.com/recipes/' + recipeId)
    return data.json()
})

const singleRecipeSlice = createSlice ({
    name :"Singlerecipe",
    initialState : {
        isLoading: true,
        data: {},
        error: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchsinglerecipe.pending, (state,action) => {
        state.isLoading = true
        });
        builder.addCase(fetchsinglerecipe.fulfilled, (state,action) => {
        state.isLoading = false
        state.data[action.payload.id] = action.payload
        });
        builder.addCase(fetchsinglerecipe.rejected, (state,action) => {
        console.log(action)
        state.error = true
        })
    }
})

export default singleRecipeSlice.reducer