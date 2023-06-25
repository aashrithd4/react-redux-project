import { ActionTypes } from "../constants/action-types"

export const setProducts = (products) =>{
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProduct = (product) =>{
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
};

// when navigating to a new page a component is destroyed so we need to handle that scenario

export const removeSelectedProduct = (product) =>{
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
};