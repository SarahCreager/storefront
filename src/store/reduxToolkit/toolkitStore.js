import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';


// add our reducers
import productReducer from './products.js';
import categoriesReducer from './categories.js';
import cartReducer from './cart.js';

let reducers = combineReducers({
  products: productReducer,
  categories: categoriesReducer,
  cart: cartReducer
});


// create our "store" - stands for storage not storefront :P
const store = configureStore({ 
  reducer: reducers,
});

export default store;



