import axios from "axios";

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_PRODUCTS_ID = "GET_PRODUCTS_ID";
export const GET_PRODUCTS_AMOUNT = "GET_PRODUCTS_AMOUNT";
export const GET_PRODUCTS_CATEGORY = "GET_PRODUCTS_CATEGORY";
export const ORDER_BY_PRICE = "ORDER_BY_PRICE";
export const GET_PRODUCTS_BY_INGREDIENT = "GET_PRODUCTS_BY_INGREDIENT";
export const SAVE_USER = "SAVE_USER";
export const ERASE_USER = "ERASE_USER";
export const ACTIVE_USER = "ACTIVE_USER";
//CART
export const ADD_TO_CART = "ADD_TO_CART";
export const RESTART_CART = "RESTART_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const DELETE_PRODUCTS_CART = "DELETE_PRODUCTS_CART";
//MAPS
export const SET_NEW_POSITION = "SET_NEW_POSITION";

//COMMENT
export const GET_ALL_COMMENTS = "GET_ALL_COMMENTS";
export const CREATE_COMMENT = "CREATE_COMMENT";
export const UPDATE_COMMENT = "UPDATE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

export const GET_ALL_USER_FAVS = "GET_ALL_USER_FAVS";
export const ADD_PRODUCT_FAVORITE = "ADD_PRODUCT_FAVORITE";
export const REMOVE_PRODUCT_FAVORITE = "REMOVE_PRODUCT_FAVORITE";

export function setNewPosition(params) {
  return { type: SET_NEW_POSITION, payload: params };
}

export function getAllProducts() {
  return async function (dispatch) {
    var json = await axios.get("/products");
    return dispatch({ type: "GET_ALL_PRODUCTS", payload: json.data });
  };
}

export function getProductID(id) {
  return async function (dispatch) {
    var json = await axios.get("/products/" + id);
    return dispatch({ type: "GET_PRODUCTS_ID", payload: json.data });
  };
}

export function getProductByAmount(params) {
  return {
    type: "GET_PRODUCTS_AMOUNT",
    payload: params,
  };
}

export function getProductsByCategory(params) {
  return {
    type: "GET_PRODUCTS_CATEGORY",
    payload: params,
  };
}

export function orderByPrice(payload) {
  return {
    type: "ORDER_BY_PRICE",
    payload,
  };
}

export function getProductsByIgredient(params) {
  return {
    type: "GET_PRODUCTS_BY_INGREDIENT",
    payload: params,
  };
}

export function removeFromCart(params) {
  return {
    type: "REMOVE_FROM_CART",
    payload: params,
  };
}

export function deleteProductsCart(params) {
  return {
    type: "DELETE_PRODUCTS_CART",
    payload: params,
  };
}

export function addToCart(params) {
  let object = {
    id: params.id,
    name: params.name,
    image: params.image,
    price: params.price,
    quantity: 1,
    description: params.summary,
  };
  return {
    type: "ADD_TO_CART",
    payload: object,
  };
}

export function restartCart(params) {
  return {
    type: "RESTART_CART",
    payload: params,
  };
}

export function addProductsToCart(params) {
  return async function () {
    var json = await axios.post("/payment", params);
    return json.data;
  };
}
/* export function addProductFavorite(payload) {
  return { type: "ADD_PRODUCT_FAVORITE", payload };
}
export function removeProductFavorite(id) {
  return {
    type: "REMOVE_PRODUCT_FAVORITE",
    payload: id,
  };
} */
export function saveUser(params) {
  return { type: "SAVE_USER", payload: params };
}

export function eraseUser() {
  return { type: "ERASE_USER" };
}

export function userActive(state) {
  return { type: "ACTIVE_USER", payload: state };
}
export function addOrderToDB(params) {
  return async function () {
    var json = await axios.post("/orders", params);
    return json.data;
  };
}

//-------------------------------------

export function getAllComments(id) {
  return async function (dispatch) {
    const commentsInfo = await axios.get(
      "/comments/product/" + id
    );
    dispatch({
      type: GET_ALL_COMMENTS,
      payload: commentsInfo.data,
    });
  };
}

export function createComment(payload) {
  return async function (dispatch) {
    const info = await axios.post("/comments", payload);
    dispatch({
      type: CREATE_COMMENT,
      payload: info.data,
    });
  };
}

export function updateComment(payload) {
  return async function (dispatch) {
    const info = await axios.put("/comments", payload);
    dispatch({
      type: UPDATE_COMMENT,
      payload: info.data,
    });
  };
}
export function deleteComment(payload) {
  return async function (dispatch) {
    const deletedComment = await axios.delete(
      "/comments?idUser=" +
        payload.idUser +
        "&idProduct=" +
        payload.idProduct
    );
    dispatch({
      type: DELETE_COMMENT,
      payload: deletedComment.data,
    });
  };
}

//----------------------------------------------

export function getAllUserFavs(userId) {
  return async function (dispatch) {
    const res = await axios.get("/favorites/" + userId);
    dispatch({ type: GET_ALL_USER_FAVS, payload: res.data });
  };
}
export function addProductFavorite({ product, userId }) {
  return async function (dispatch) {
    const res = await axios.post("/favorites", {
      productId: product.id,
      userId,
    });
    dispatch({ type: ADD_PRODUCT_FAVORITE, payload: product });
  };
}
export function removeProductFavorite({ product, userId }) {
  return async function (dispatch) {
    const res = await axios.delete(
      "/favorites/?userId=" +
        userId +
        "&productId=" +
        product.id
    );
    dispatch({
      type: REMOVE_PRODUCT_FAVORITE,
      payload: product,
    });
  };
}