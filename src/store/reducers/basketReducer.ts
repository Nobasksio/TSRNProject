import {BasketState} from "../../interfaces/interfaces";
import {
    ADD_TO_BASKET,
    BasketActionsTypes,
    CLEAR_BASKET, REMOVE_ONE_FROM_BASKET,
    SET_ADDRESS,
    SET_NAME, SET_ORDER_ITEM_NUM,
    SET_PHONE
} from "../actions/basketActions";

const initialState: BasketState = {
    products: [],
    name: '',
    phone: '',
    address: '',
    hasRequiredFields: false,
}
export const basketReducer = (state: BasketState = initialState,
                              action: BasketActionsTypes): BasketState => {
    switch (action.type) {

        case ADD_TO_BASKET: {
            const products = [...state.products];

            const searchedIndex = products.findIndex((item) => {
                return item.product.id === action.product.id
            })
            if (searchedIndex !== -1) products[searchedIndex].num += 1;
            else {
                products.push({
                    product: action.product,
                    num: 1
                })
            }

            return {
                ...state,
                products: [...products]
            }
        }
        case SET_ORDER_ITEM_NUM: {

            const products = [...state.products];

            products.forEach((item) => {
                if (item.product.id === action.productId){
                    item.num = action.num
                }
            })

            return {
                ...state,
                products: [...products]
            }
        }
        case REMOVE_ONE_FROM_BASKET: {

            const products = [...state.products];

            const searchedIndex = products.findIndex((item) => {
                return item.product.id === action.productId
            })

            if (products[searchedIndex].num > 1) products[searchedIndex].num -= 1;
            else {
                products.splice(searchedIndex, 1);
            }

            return {
                ...state,
                products: [...products]
            }
        }
        case SET_PHONE: {
            return {
                ...state,
                phone: action.phone
            }
        }
        case SET_NAME: {
            return {
                ...state,
                name: action.name
            }
        }
        case SET_ADDRESS: {
            return {
                ...state,
                address: action.address
            }
        }
        case CLEAR_BASKET:
            return {
                ...initialState,
            }

        default:
            return state
    }
}
