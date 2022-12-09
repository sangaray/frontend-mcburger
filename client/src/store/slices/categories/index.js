import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        categories: [],
    },
    reducers: {
        getCategories: (state, action) => {
            state.categories = action.payload
        },
        getCategoryById: (state, action) => {
            state.categories = action.payload
        },
    }
})

export const { getCategories, getCategoryById } = categoriesSlice.actions;

export default categoriesSlice.reducer;