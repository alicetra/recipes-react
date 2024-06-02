import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchsinglerecipe = createAsyncThunk("fetchsinglerecipe", async (recipeId) => {
    const data = await fetch('https://dummyjson.com/recipes/' + recipeId)
    if (data.status === 200) {
        return data.json();
    } else {
        throw new Error(data.status)
    }
})


const singleRecipeSlice = createSlice({
    name: "Singlerecipe",
    initialState: {
        isLoading: true,
        data: {},
        error: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchsinglerecipe.pending, (state, action) => {
            state.isLoading = true
        });
        builder.addCase(fetchsinglerecipe.fulfilled, (state, action) => {
            state.isLoading = false
            state.data[action.payload.id] = action.payload
        });
        builder.addCase(fetchsinglerecipe.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error
        })
    }
})

export default singleRecipeSlice.reducer