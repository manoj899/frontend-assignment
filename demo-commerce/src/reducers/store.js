
import { thunk } from "redux-thunk";
import { applyMiddleware, combineReducers, legacy_createStore, compose } from "redux";

import ProductListReducer from "./product-list-reducer";

const reducers = combineReducers({
	product_list_store: ProductListReducer
});

const middlewares = [applyMiddleware(thunk)];

const enhancer = compose(...middlewares);

const store = legacy_createStore(reducers, enhancer);

export default store;
