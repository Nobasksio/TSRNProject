import axios from 'axios';
import {API_LINK} from 'react-native-dotenv'
import {CatalogState, CategoryItem, ProductItemI} from "../../interfaces/interfaces";

export const CATALOG_REQUEST = 'CATALOG_REQUEST'
export const CATALOG_REQUEST_FAIL = 'CATALOG_REQUEST_FAIL'
export const CATALOG_REQUEST_SUCCESS = 'CATALOG_REQUEST_SUCCESS'

export interface RequestCatalogActionI {
    type: typeof CATALOG_REQUEST
}

export interface RequestCatalogFailActionI {
    type: typeof CATALOG_REQUEST_FAIL,
    error: string,
}

export interface RequestCatalogSuccessActionI {
    type: typeof CATALOG_REQUEST_SUCCESS
    products: ProductItemI[],
    categories: CategoryItem[]
}

export type CatalogActionTypes = RequestCatalogActionI | RequestCatalogFailActionI | RequestCatalogSuccessActionI;


export function requestCatalog(): CatalogActionTypes {
    return {
        type: CATALOG_REQUEST,
    }
}


export function requestCatalogFail(error: string): CatalogActionTypes {
    return {
        type: CATALOG_REQUEST_FAIL,
        error,
    }
}


export function requsetCatalogSuccess(catalogState: CatalogState): CatalogActionTypes {
    return {
        type: CATALOG_REQUEST_SUCCESS,
        products: catalogState.products,
        categories: catalogState.categories
    }

}

export function fetchCatalog() {
    return function (dispatch: any) {

        dispatch(requestCatalog());

        return axios.get(API_LINK)
            .then(({data}) => {
                console.log(data);
                dispatch(requsetCatalogSuccess(data));

            })
            .catch(() => {
                dispatch(requestCatalogFail(`При получении католога возникла проблема.
                    Проверьте подключение к интернет или попробуйте позже.`));
            })

    }
}
