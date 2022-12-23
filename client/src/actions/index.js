import axios from "axios";

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"
export const GET_PRODUCTS_ID = "GET_PRODUCTS_ID"
export const GET_PRODUCTS_AMOUNT = "GET_PRODUCTS_AMOUNT"
export const GET_PRODUCTS_CATEGORY = "GET_PRODUCTS_CATEGORY"
export const ORDER_BY_PRICE = "ORDER_BY_PRICE"
export const GET_PRODUCTS_BY_INGREDIENT = "GET_PRODUCTS_BY_INGREDIENT"
export const SAVE_USER = 'SAVE_USER'
export const ERASE_USER = 'ERASE_USER'
export const ACTIVE_USER = 'ACTIVE_USER'

//CART
export const ADD_TO_CART = "ADD_TO_CART"
export const RESTART_CART = "RESTART_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const DELETE_PRODUCTS_CART = "DELETE_PRODUCTS_CART"

export function getAllProducts() {
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3001/products")
        return dispatch({ type: "GET_ALL_PRODUCTS", payload: json.data })
    }
}

export function getProductID(id) {
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3001/products/" + id)
        return dispatch({ type: "GET_PRODUCTS_ID", payload: json.data })
    }
}

export function getProductByAmount(params) {
    return {
        type: "GET_PRODUCTS_AMOUNT",
        payload: params
    }
}

export function getProductsByCategory(params) {
    return {
        type: "GET_PRODUCTS_CATEGORY",
        payload: params
    }
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

export function removeFromCart(params) {
    return {
        type: "REMOVE_FROM_CART",
        payload: params
    }
}

export function deleteProductsCart(params) {
    return {
        type: "DELETE_PRODUCTS_CART",
        payload: params
    }
}


export function addToCart(params) {

    let object = {
        id: params.id,
        name: params.name,
        image: params.image,
        price: params.price,
        quantity: 1,
        description:params.summary,
    }
    return {
        type: "ADD_TO_CART",
        payload: object
    }
}

export function restartCart(params) {
    return {
        type: "RESTART_CART",
        payload: params
    }
}

export function addProductsToCart(payload) {
    return async function () {
        console.log("la action funciona, y el payload es:")
        console.log(payload)
    }
}

export function saveUser(params) {
    return { type: "SAVE_USER", payload: params }
}

export function eraseUser() {
    return { type: "ERASE_USER" }
}

export function userActive(state) {
    return { type: "ACTIVE_USER", payload: state }
}


