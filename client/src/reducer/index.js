import {
  GET_ALL_PRODUCTS,
  GET_PRODUCTS_ID,
  GET_PRODUCTS_AMOUNT,
  GET_PRODUCTS_CATEGORY,
  ORDER_BY_PRICE,
  GET_PRODUCTS_BY_INGREDIENT,
  ADD_TO_CART,
  RESTART_CART,
  DELETE_FROM_CART,
} from "../actions/index";

const initialState = {
  allProducts: [],
  products: [],
  productsCategory: [],
  product: {},
  cart: {
    1: {
      id: 1,
      name: "Cheeseburger",
      image: "asdf.com",
      price: "$2",
      quantity: 2,
    },
    2: {
      id: 2,
      name: "Chicken Nuggets",
      image: "asdf.com",
      price: "$2",
      quantity: 3,
    },
  },
};

function rootReducer(state = initialState, action) {
  let newCart = { ...state.cart };

  switch (action.type) {
    case GET_ALL_PRODUCTS:
      console.log(action.payload);
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
        productsCategory: state.allProducts.filter(
          (p) => p.idCategory === action.payload
        ),
        products: state.allProducts.filter(
          (p) => p.idCategory === action.payload
        ),
      };

    case GET_PRODUCTS_BY_INGREDIENT:
      //recibe uno o muchos "productIngredients"
      console.log("llegue");
      const products = state.productsCategory; //los que estan cargados
      const searchIngredients = action.payload; //los que envio

      return {
        ...state,
        products:
          action.payload === ["All"]
            ? state.productsCategory
            : products.filter((p) => {
                let productIngredients = p.ingredients;
                productIngredients = productIngredients.split("-");
                productIngredients = productIngredients.map((e) => e.trim());
                console.log(searchIngredients);
                let coincidense = false;
                searchIngredients.map((e) =>
                  productIngredients.map((i) => {
                    if (e === i) coincidense = true;
                  })
                );
                return coincidense;
              }),
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
      let orderArray = [...state.products];
      console.log(orderArray); //desordenado
      action.payload == "asc"
        ? orderArray.sort(function (a, b) {
            a = a.price.split("$")[1];
            b = b.price.split("$")[1];
            return parseInt(b) - parseInt(a);
          })
        : orderArray.sort(function (a, b) {
            a = a.price.split("$")[1];
            b = b.price.split("$")[1];
            return parseInt(a) - parseInt(b);
          });
      console.log(orderArray); //ordenado
      return {
        ...state,
        products: orderArray,
      };

    case ADD_TO_CART:
      if (state.cart.hasOwnProperty(action.payload.id)) {
        state.cart[action.payload.id].quantity += 1;
        newCart[action.payload.id] = state.cart[action.payload.id];
      } else {
        newCart[action.payload.id] = action.payload;
      }

      return {
        ...state,
        cart: newCart,
      };

    case RESTART_CART:
      return {
        ...state,
        cart: {},
      };

    case DELETE_FROM_CART:
      if (state.cart.hasOwnProperty(action.payload.id)) {
        state.cart[action.payload.id].quantity -= 1;
        if (!state.cart[action.payload.id].quantity < 1) {
          newCart[action.payload.id] = state.cart[action.payload.id];
        } else {
          delete newCart[action.payload.id];
        }
      }

      return {
        ...state,
        cart: newCart,
      };

    default:
      return { ...state };
  }
}

export default rootReducer;
