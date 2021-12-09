import { createStore, combineReducers } from 'redux';

// add our reducers
import productReducer from './products.js';
import categoriesReducer from './categories.js';


let reducers = combineReducers({
  products: productReducer,
  categories: categoriesReducer,
});

// create our "store" - stands for storage not storefront :P
const store = () => createStore(reducers);


export default store;

