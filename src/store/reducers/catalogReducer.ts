import {CatalogState} from "../../interfaces/interfaces";
import {
    CATALOG_REQUEST,
    CATALOG_REQUEST_FAIL,
    CATALOG_REQUEST_SUCCESS,
    CatalogActionTypes
} from "../actions/catalogActions";


const initialState: CatalogState = {
    categories: [
        {
            id: 1,
            name: "Телевизоры"
        },
        {
            id: 2,
            name: "Холодильники"
        },
    ],
    products: [
        {
            id: 1,
            category: 1,
            name: "Телевизор #1",
            price: 100,
            property: "Значение свойства #1",
        },
        {
            id: 2,
            category: 1,
            name: "Телевизор #2",
            price: 150,
            property: "Значение свойства #2",
        },
        {
            id: 3,
            category: 2,
            name: "Холодильник #1",
            price: 90,
            property: "Значение свойства #3",
        },
    ],
    isFetch: false,
    fetchError: null,
};

export const catalogReducer = (state: CatalogState = initialState,
                               action: CatalogActionTypes)
    :CatalogState => {
    switch (action.type) {
        case CATALOG_REQUEST: return {
            ...state,
            isFetch: true,
            fetchError: null,
        }
        case CATALOG_REQUEST_FAIL: return {
            ...state,
            isFetch: false,
            fetchError: action.error,
        }
        case CATALOG_REQUEST_SUCCESS: return {
            ...state,
            isFetch: false,
            fetchError: null,
            categories: action.categories,
            products: action.products
        }
        default: return state
    }
    return state;
}
