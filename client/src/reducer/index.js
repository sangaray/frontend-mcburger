import {
  GET_ALL_PRODUCTS,
  GET_PRODUCTS_ID,
  GET_PRODUCTS_AMOUNT,
  GET_PRODUCTS_CATEGORY,
  GET_ALL_INGREDIENTS,
  FILTER_BY_INGREDIENT,
} from "../actions/index";

const initialState = {
  allProducts: [],
  products: [],
  product: {},
  ingredients: [],
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
        product: action.payload,
      };

    case GET_PRODUCTS_CATEGORY:
      return {
        ...state,
        products: state.allProducts.filter(
          (p) => p.idCategory === action.payload
        ),
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

    case GET_ALL_INGREDIENTS:
      const ingredients = [];

      for (const product of state.products) {
        for (const ingredient of product.ingredients.split(" - ")) {
          if (!ingredients.includes(ingredient)) {
            ingredients.push(ingredient);
          }
        }
      }

      return {
        ...state,
        ingredients,
      };
    case FILTER_BY_INGREDIENT:
      return {
        ...state,
        products: state.products.filter((p) => p.ingredients.includes(action.payload)),
      };

    default:
      return { ...state };
  }
}

export default rootReducer;
