import {
  GET_ALL_PRODUCTS,
  GET_PRODUCTS_ID,
  GET_PRODUCTS_AMOUNT,
  GET_PRODUCTS_CATEGORY,
} from "../actions/index";

const initialState = {
  allProducts: [],
  products: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload,
      };

    case GET_PRODUCTS_ID:
      return {
        ...state,
        products: action.payload,
      };

    case GET_PRODUCTS_CATEGORY:
      return {
        ...state,
        products: state.allProducts.filter((p) => p.idCategory === action.payload),
      };

    case GET_PRODUCTS_AMOUNT:
      return {
        ...state,
        products: state.products.filter((p) => {
          const price = p.price.split("$")[1];
          return (
            price >= parseInt(action.payload[0]) &&
            price <= parseInt(action.payload[1])
          );
        }),
      };

    default:
      return { ...state };
  }
}

export default rootReducer;
