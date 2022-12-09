import axios from 'axios';

//actions products

export function getAllProducts(){
    return async function(dispatch) {
        var json = await axios.get("http://localhost:3001/products")
        return dispatch({type:'', payload: json.data})
    }
}

export function getProductById(id){
    return async function(dispatch) {
        var json = await axios.get("")
        return dispatch({type:'', payload: json.data})
    }
}

//actions branches

export function getAllBranches(){
    return async function(dispatch) {
        var json = await axios.get("http://localhost:3001/branches")
        return dispatch({type:'', payload: json.data})
    }
}

export function getBranchById(id){
    return async function(dispatch) {
        var json = await axios.get("")
        return dispatch({type:'', payload: json.data})
    }
}

//actions category

export function getAllCategories(){
    return async function(dispatch) {
        var json = await axios.get("http://localhost:3001/categories")
        return dispatch({type:'', payload: json.data})
    }
}

export function getCategoryById (id) {
    return async function(dispatch) {
        var json = await axios.get("")
        return dispatch({type:'', payload: json.data})
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