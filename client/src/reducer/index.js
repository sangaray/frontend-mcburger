import { GET_ALL_PRODUCTS, GET_PRODUCTS_ID, GET_PRODUCTS_AMOUNT, GET_PRODUCTS_CATEGORY } from "../actions/index"


const initialState = {
    allProducts: [],
    products: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {

        case GET_ALL_PRODUCTS:
            console.log(action.payload)
            return {
                ...state,
                products: action.payload,
                allProducts: action.payload
            }

        case GET_PRODUCTS_ID:
            return {
                ...state,
                products: action.payload,
            }

        case GET_PRODUCTS_CATEGORY:
            console.log(allProductss)
            return {
                ...state,
                products: state.allProducts.filter(p => p.idCategory === action.payload)
            }
            
        case GET_PRODUCTS_AMOUNT:
            const allProducts = state.allProducts;
            return {
                ...state,
                products: allProducts.filter(p => p.price > (action.payload[0]) && p.price < (action.payload[1]))
            }

        default:
            return { ...state }

    }
}

export default rootReducer;