import {
  GET_ALL_PRODUCTS,
  GET_PRODUCTS_ID,
  GET_PRODUCTS_AMOUNT,
  GET_PRODUCTS_CATEGORY,
  ORDER_BY_PRICE,
} from "../actions/index";

const initialState = {
  allProducts: [],
  products: [],
  product: {},
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

    case ORDER_BY_PRICE:
      let orderArray = [...state.products]
      console.log(orderArray) //desordenado
      // if (action.payload == 'cost') {
      //   orderArray = [...state.products]
      // } else {
      action.payload == 'asc' ?
        orderArray.sort(function (a, b) {
          a = a.price.split("$")[1]
          b = b.price.split("$")[1]
          return parseInt(b) - parseInt(a);

        }) : orderArray.sort(function (a, b) {
          a = a.price.split("$")[1]
          b = b.price.split("$")[1]
          return parseInt(a) - parseInt(b);
        })
      console.log(orderArray) //ordenado
      return {
        ...state,
        products: orderArray,
      }
    // }
    default:
      return { ...state };
  }
}

export default rootReducer;
