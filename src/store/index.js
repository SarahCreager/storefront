import { createStore, combineReducers } from 'redux';

// add our reducers
import productReducer from './products.js';

// TODO: change votes
let reducers = combineReducers({votes: productReducer});

// create our "store" - stands for storage not storefront :P
const store = () => {
  return createStore(reducers);
};

export default store;
