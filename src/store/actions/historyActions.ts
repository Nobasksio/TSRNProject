import {BasketState} from "../../interfaces/interfaces";
import AsyncStorage from '@react-native-community/async-storage';

export const SAVE_ORDER = 'SAVE_ORDER';

export const SET_STORAGE_DATA_REQUEST = 'SET_STORAGE_DATA_REQUEST';
export const SET_STORAGE_DATA_SUCCESS = 'SET_STORAGE_DATA_SUCCESS';
export const SET_STORAGE_DATA_FAIL = 'SET_STORAGE_DATA_FAIL';

export const GET_STORAGE_DATA_REQUEST = 'GET_STORAGE_DATA_REQUEST';
export const GET_STORAGE_DATA_SUCCESS = 'GET_STORAGE_DATA_SUCCESS';
export const GET_STORAGE_DATA_FAIL = 'GET_STORAGE_DATA_FAIL';

export interface SaveOrderActionI {
    type: typeof SAVE_ORDER,
    basketState: BasketState
}


export function saveOrder(basketState: BasketState): SaveOrderActionI {
    return {
        type: SAVE_ORDER,
        basketState
    }
}

export function storageLoadSuccess() {

}

export function saveOrdertoStorage(basketState: BasketState) {
    return function (dispatch: any) {

        try {
            const jsonValue = JSON.stringify(basketState)
            return AsyncStorage.setItem('@history', jsonValue);
        } catch (e) {

        }

    }
}

export function loadAsyncHistory() {
    return function (dispatch: any) {

        try {
            AsyncStorage.getItem('@history')
                .then((value)=>{
                    if(value !== null) {
                        dispatch(set)
                        const basketState = JSON.parse(value);
                    }

                })

        } catch(e) {
            // error reading value
        }




    }
}
