import {
  GET_ALL_PRODUCTS,
  GET_PRODUCTS_ID,
  GET_PRODUCTS_AMOUNT,
  GET_PRODUCTS_CATEGORY,
  ORDER_BY_PRICE,
  GET_PRODUCTS_BY_INGREDIENT,
  ADD_TO_CART,
  RESTART_CART,
  REMOVE_FROM_CART,
  DELETE_PRODUCTS_CART,
  ADD_PRODUCT_FAVORITE,
  REMOVE_PRODUCT_FAVORITE,
  SAVE_USER,
  ERASE_USER,
  ACTIVE_USER,
  SET_NEW_POSITION,
  GET_ALL_COMMENTS,
  CREATE_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  GET_ALL_USER_FAVS,
} from "../actions/index";

const initialState = {
  allProducts: [],
  products: [],
  productsCategory: [],
  product: {},
  cart: {},
  productsFavorites: [],
  user: [],
  activeUser: false,
  mapPosition: {
    status: "user",
    coordenates: [-34.603743591667396, -58.38151982455165],
  },
  productDetail: {},
  productComments: [],
};

function rootReducer(state = initialState, action) {
  let newCart = { ...state.cart };

  switch (action.type) {
    case SET_NEW_POSITION:
      return {
        ...state,
        mapPosition: action.payload,
      };
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
        productsCategory: state.allProducts.filter(
          (p) => p.idCategory === action.payload
        ),
        products: state.allProducts.filter(
          (p) => p.idCategory === action.payload
        ),
      };

    case GET_PRODUCTS_BY_INGREDIENT:
      //recibe uno o muchos "productIngredients"
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
      action.payload === "asc"
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

    case REMOVE_FROM_CART:
      if (state.cart.hasOwnProperty(action.payload.id)) {
        state.cart[action.payload.id].quantity -= 1;
        if (!state.cart[action.payload.id].quantity < 1) {
          newCart[action.payload.id] = state.cart[action.payload.id];
        } else {
          delete newCart[action.payload.id];
        }
      }
      return { ...state, cart: newCart };

    case DELETE_PRODUCTS_CART:
      delete newCart[action.payload.id];

      return {
        ...state,
        cart: newCart,
      };
    case GET_ALL_USER_FAVS:
      return {
        ...state,
        productsFavorites: action.payload,
      };
    case ADD_PRODUCT_FAVORITE:
      let newFav = [];
      for (const i of state.productsFavorites) {
        if (i.id !== action.payload.id) {
          newFav.push(i);
        }
      }
      return {
        ...state,
        productsFavorites: newFav,
      };
    case REMOVE_PRODUCT_FAVORITE:
      return {
        ...state,
        productsFavorites: state.productsFavorites.filter(
          (p) => p.id !== action.payload.id
        ),
      };
    case SAVE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case ERASE_USER:
      return {
        ...state,
        user: [],
      };
    case ACTIVE_USER:
      return {
        ...state,
        activeUser: action.payload,
      };
    case GET_ALL_COMMENTS:
      return {
        ...state,
        productComments: action.payload,
      };

    case CREATE_COMMENT:
      return {
        ...state,
        productComments: Array.isArray(action.payload)
          ? action.payload
          : [action.payload],
      };
    case UPDATE_COMMENT:
    case DELETE_COMMENT:
      return { ...state, productComments: action.payload };
    default:
      return { ...state };
  }
}

export default rootReducer;
