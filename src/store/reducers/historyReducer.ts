import {HistoryState} from "../../interfaces/interfaces";
import {
    GET_STORAGE_DATA_SUCCESS,
    HistoryActionsI,
    SAVE_ORDER,
    SET_STORAGE_DATA_SUCCESS
} from "../actions/historyActions";

const initialState: HistoryState = {
    orders: [],
    isSync: false
};


export const historyReducer = (state: HistoryState = initialState,
                               action: HistoryActionsI)
    :HistoryState => {
    switch (action.type) {
        case SAVE_ORDER: return {
            orders: [...state.orders, {
                products: [...action.basketState.products],
                date: new Date(),
            }],
            isSync: false,
        }
        case SET_STORAGE_DATA_SUCCESS: return {
            ...state,
            isSync: true,
        }
        case GET_STORAGE_DATA_SUCCESS: return {
            orders: [...action.historyState.orders],
            isSync: true,
        }
        default: return state
    }
    return state;
}
