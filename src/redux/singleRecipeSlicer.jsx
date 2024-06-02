import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchsinglerecipe = createAsyncThunk("fetchsinglerecipe", async (recipeId) => {
    //append the recipe add to fetch a single recipe only, the recipeID is a prompt passed from the SinglePage which gets it from the params of the route
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
            //take the curent recipe id as a key and save the payload of each recipe at loading when user click. 
            //This allowed us not to fetch page data if user already fetch it once before.
            state.data[action.payload.id] = action.payload
        });
        builder.addCase(fetchsinglerecipe.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error
        })
    }
})

export default singleRecipeSlice.reducer