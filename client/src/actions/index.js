import axios from "axios";

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_PRODUCTS_ID = "GET_PRODUCTS_ID";
export const GET_PRODUCTS_AMOUNT = "GET_PRODUCTS_AMOUNT";
export const GET_PRODUCTS_CATEGORY = "GET_PRODUCTS_CATEGORY";
export const GET_ALL_INGREDIENTS = "GET_ALL_INGREDIENTS"
export const FILTER_BY_INGREDIENT = "FILTER_BY_INGREDIENT"

export function getAllProducts() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/products");
    return dispatch({ type: "GET_ALL_PRODUCTS", payload: json.data });
  };
}

export function getProductID(id) {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/products/" + id);
    return dispatch({ type: "GET_PRODUCTS_ID", payload: json.data });
  };
}

export function getAllIngredients() {
  return {type: "GET_ALL_INGREDIENTS"}
}

export function getProductByAmount(params) {
  return { type: "GET_PRODUCTS_AMOUNT", payload: params };
}

export function getProductsByCategory(params) {
  return { type: "GET_PRODUCTS_CATEGORY", payload: params };
}

export function filterByIngredient(ingredient) {
    return {type: "FILTER_BY_INGREDIENT", payload: ingredient}
}

export function orderByPrice(payload) {
    return {
        type: 'ORDER_BY_PRICE',
        payload
    }
}

export function getProductsByIgredient(params) {
    return {
        type: "GET_PRODUCTS_BY_INGREDIENT",
        payload: params
    }
}