import {BasketState, ProductItemI} from "../../interfaces/interfaces";


export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const SET_ORDER_ITEM_NUM = 'SET_ORDER_ITEM_NUM';
export const REMOVE_ONE_FROM_BASKET = 'REMOVE_ONE_FROM_BASKET';

export const SET_NAME = 'SET_NAME';
export const SET_PHONE = 'SET_PHONE';
export const SET_ADDRESS = 'SET_ADDRESS';

export const CLEAR_BASKET = 'CLEAR_BASKET';


export interface AddToBasketActionI {
    type: typeof ADD_TO_BASKET,
    product: ProductItemI
}

export interface SetOrderItemNumI {
    type: typeof SET_ORDER_ITEM_NUM,
    productId: number,
    num: number,
}

export interface RemoveOneFromBasketI {
    type: typeof REMOVE_ONE_FROM_BASKET,
    productId: number,
}

export interface SetPhoneActionI {
    type: typeof SET_PHONE,
    phone: string,
}

export interface SetNameActionI {
    type: typeof SET_NAME,
    name: string,
}

export interface SetAddressActionI {
    type: typeof SET_ADDRESS,
    address: string,
}

export interface ClearBasketActionI {
    type: typeof CLEAR_BASKET,
}


export type BasketActionsTypes = AddToBasketActionI
    | SetOrderItemNumI
    | RemoveOneFromBasketI
    | SetPhoneActionI
    | SetNameActionI
    | SetAddressActionI
    | ClearBasketActionI;


export function addBasket(product: ProductItemI): AddToBasketActionI {
    return {
        type: ADD_TO_BASKET,
        product
    }
}

export function removeOneFromBasket(productId: number): RemoveOneFromBasketI {
    return {
        type: REMOVE_ONE_FROM_BASKET,
        productId,
    }
}

export function setOrderItem(productId: number, num: number): SetOrderItemNumI {
    return {
        type: SET_ORDER_ITEM_NUM,
        productId,
        num
    }
}

export function setPhone(phone: string): SetPhoneActionI {
    return {
        type: SET_PHONE,
        phone,
    }
}

export function setName(name: string): SetNameActionI {
    return {
        type: SET_NAME,
        name,
    }
}
export function setAddress(address: string): SetAddressActionI {
    return {
        type: SET_ADDRESS,
        address,
    }
}

export function clearBasket(): ClearBasketActionI {
    return {
        type: CLEAR_BASKET,
    }
}

