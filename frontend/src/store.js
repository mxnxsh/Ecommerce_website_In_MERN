import {
   createStore,
   combineReducers,
   applyMiddleware,
   compose
} from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import {
   productListReducer,
   productDetailsReducer,
   productSaveReducer,
   productDeleteReducer,
} from './../src/reducers/productReducers';
import {
   cartReducer
} from '../src/reducers/cartReducers';
import {
   userSigninReducer,
   userRegisterReducer
} from './reducers/userReducers';

const cartItems = Cookie.getJSON('cartItems') || [];
const userInfo = Cookie.getJSON('userInfo') || null;

const initialState = {
   cart: {
      cartItems
   },
   userSignin: {
      userInfo
   }
};

// create reducer
const reducer = combineReducers({
   productList: productListReducer,
   productDetails: productDetailsReducer,
   cart: cartReducer,
   userSignin: userSigninReducer,
   userRegister: userRegisterReducer,
   productSave: productSaveReducer,
   productDelete: productDeleteReducer,
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