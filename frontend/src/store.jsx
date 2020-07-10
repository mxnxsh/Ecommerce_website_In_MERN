import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {
   productListReducer,
   productDetailsReducer,
} from './../src/reducers/productReducers';

const initialState = {};

// create reducer
const reducer = combineReducers({
   productList: productListReducer,
   productDetails: productDetailsReducer,
});

//connect redux dev tool with the browser
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create redux store it takes two parameter reducer as function and initialState
const store = createStore(
   reducer,
   initialState,
   composeEnhancer(applyMiddleware(thunk)),
);

export default store;
