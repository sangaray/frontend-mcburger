import axios from 'axios';
import { getProducts, getProductById } from "../store/slices/products"
import { getBranches } from "../store/slices/branches"
import { getCategories, getCategoryById } from "../store/slices/categories"

//actions products

export function getAllProducts() {
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3001/products")
        return dispatch(getProducts(json.data))
    }
}

export function getProductID(id) {
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3001/products/" + id)
        return dispatch(getProductById(json.data))
    }
}

//actions branches

export function getAllBranches() {
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3001/branches")
        return dispatch(getBranches(json.data))
    }
}

//actions category

export function getAllCategories() {
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3001/categories")
        return dispatch(getCategories(json.data))
    }
}

export function getCategoryID(id) {
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3001/categories/" + id)
        return dispatch(getCategoryById(json.data))
    }
}



// esto es asi?
//
// export function getProductsbyCaterogy(category){
//     return async function(dispatch) {
//         var json = await axios.get("ruta")
//         return dispatch({type:'', payload: json.data})
//     }
// }

// export function getProductsbyingredients(ingredientes){
//     return async function(dispatch) {
//         var json = await axios.get("ruta")
//         return dispatch({type:'', payload: json.data})
//     }
// }