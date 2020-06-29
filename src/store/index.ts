import thunkMiddleware from 'redux-thunk'
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {catalogReducer} from "./reducers/catalogReducer";
import {basketReducer} from "./reducers/basketReducer";
import {historyReducer} from "./reducers/historyReducer";

const rootReducer = combineReducers({
  catalog: catalogReducer,
  basket: basketReducer,
  history: historyReducer,
});


export const myStore = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type RootState = ReturnType<typeof rootReducer>
