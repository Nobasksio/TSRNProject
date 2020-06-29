import {BasketState, CatalogState, HistoryState} from "../../interfaces/interfaces";
import {CATALOG_REQUEST, CATALOG_REQUEST_FAIL, CATALOG_REQUEST_SUCCESS} from "../actions/catalogActions";
import {SAVE_ORDER, SaveOrderActionI} from "../actions/historyActions";

const initialState: HistoryState = {
    orders: []
};


export const historyReducer = (state: HistoryState = initialState,
                               action: SaveOrderActionI)
    :HistoryState => {
    switch (action.type) {
        case SAVE_ORDER: return {
            orders: [...state.orders, {
                products: [...action.basketState.products],
                date: new Date(),
            }],
        }
        default: return state
    }
    return state;
}
