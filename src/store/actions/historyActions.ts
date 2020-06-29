import {BasketState, HistoryState} from "../../interfaces/interfaces";
import AsyncStorage from '@react-native-community/async-storage';
import {RequestCatalogActionI, RequestCatalogFailActionI, RequestCatalogSuccessActionI} from "./catalogActions";

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

export interface SetStorageDataSuccessActionI {
    type: typeof SET_STORAGE_DATA_SUCCESS,
}

export interface GetStorageDataSuccessArcionsI {
    type: typeof GET_STORAGE_DATA_SUCCESS,
    historyState: HistoryState
}

export type HistoryActionsI = SaveOrderActionI
    | SetStorageDataSuccessActionI
    | GetStorageDataSuccessArcionsI;


export function saveOrder(basketState: BasketState): SaveOrderActionI {
    return {
        type: SAVE_ORDER,
        basketState
    }
}

export function setStorageDataSuccess() {
    return {
        type: SET_STORAGE_DATA_SUCCESS,
    }
}

export function getStorageDataSuccess(historyState: HistoryState) {
    return {
        type: GET_STORAGE_DATA_SUCCESS,
        historyState
    }
}

export function saveOrdertoStorage(basketState: BasketState) {
    return function (dispatch: any) {

        dispatch(saveOrder(basketState));
        try {
            const jsonValue = JSON.stringify(basketState)
            AsyncStorage.setItem('history', jsonValue)
                .then(() => {
                    dispatch(setStorageDataSuccess());
                });
        } catch (e) {

        }

    }
}

export function loadAsyncHistory() {
    return function (dispatch: any) {

        try {
            AsyncStorage.getItem('history')
                .then((value) => {
                    if (value !== null) {
                        const basketState = JSON.parse(value);
                        dispatch(saveOrder(basketState));
                    }

                })

        } catch (e) {
            console.log(e);
            // error reading value
        }


    }
}
