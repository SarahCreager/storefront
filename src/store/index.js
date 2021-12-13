import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


// add our reducers
import productReducer from './products.js';
import categoriesReducer from './categories.js';
import cartReducer from './cart.js';

let reducers = combineReducers({
  products: productReducer,
  categories: categoriesReducer,
  cart: cartReducer
});

const middleware = applyMiddleware(thunk, logger);

// create our "store" - stands for storage not storefront :P
const store = () => createStore(reducers, middleware);

export default store;
