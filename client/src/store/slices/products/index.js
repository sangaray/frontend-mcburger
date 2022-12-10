import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: []
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },
        setProductById: (state, action) => {
            state.products = action.payload
        },
    }
})

//funciones servicios de llamadas asincronas

export function getAllProducts() {
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3001/products")
        return dispatch(setProducts(json.data))
    }
}

export function getProductID(id) {
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3001/products/" + id)
        return dispatch(setProductById(json.data))
    }
}

export const { setProducts, setProductById } = productsSlice.actions;
export default productsSlice.reducer;

//detail: {},