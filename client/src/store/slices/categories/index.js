import { createSlice } from "@reduxjs/toolkit";
import { getAllCategories } from "../../../actions";

export const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        categories: [],
    },
    reducers: {
        getAllcategories: (state, action) => {
            state.categories = action.payload
        },
        getCategoryById: (state, action) => {
            state.categories = action.payload
        },
    }
})

export const { getAllCa, getProductById } = categoriesSlice.actions;

export default categoriesSlice.reducer;