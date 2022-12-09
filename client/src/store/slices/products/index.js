import { createSlice } from "@reduxjs/toolkit";

//acciones
import { getAllProducts } from "../../../actions";
import { getProductById } from "../../../actions";


export const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        detail: {},
    },
    reducers: {
        getAllProducts: (state, action) => {
            state.products = action.payload
        },
        getProductById: (state, action) => {
            state.products = action.payload
        },
    }
})

export const { getAllProducts, getProductById } = productsSlice.actions;
export default productsSlice.reducer;