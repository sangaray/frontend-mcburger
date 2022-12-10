import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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

export function getAllCategories() {
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3001/categories")
        return dispatch(getCategories(json.data))
    }
}

export function getCategoryID(id) {
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3001/categories/" + id)
        return dispatch(getCategoryById(json.data))
    }
}


export const { getCategories, getCategoryById } = categoriesSlice.actions;

export default categoriesSlice.reducer;