import {configureStore} from '@reduxjs/toolkit';

//reducers
import branches from "./slices/branches";
import products from "./slices/products";
import categories from "./slices/categories";


export default configureStore({
    reducer: {
        products,
        categories,
        branches,
    }
})