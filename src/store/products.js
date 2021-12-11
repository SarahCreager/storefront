import snake from '../img/snakeplant.jpg';
import strawberry from '../img/strawberryplant.png';
import fiddle from '../img/fiddleplant.png';
import axios from 'axios';

let initialState = {
  productList: [
    {
      name: 'Fiddle Leaf Fig',
      category: 'indoor',
      price: '$$',
      inventory: 20,
      description: 'This tall, dramatic plant adds atmosphere to any room.',
      img: fiddle,
      count:0
    },
    {
      name: 'Strawberry Plant',
      category: 'outdoor',
      price: '$',
      inventory: 30,
      description: 'A plant that also serves as a tasty treat.',
      img: strawberry,
      count:0
    },
    {
      name: 'Snake Plant',
      category: 'easy',
      price: '$$',
      inventory: 10,
      description: 'The plant that thrives on neglect.',
      img: snake,
      count:0
    }
  ]
};
async function getProducts (dispatch) {
  //TODO connect to api
  const response = await axios.get('http://localhost:3003/');

  dispatch({
    type: 'GET_PRODUCTS',
    payload: response.data
  });
}

function productReducer(state = initialState, action) {

  switch (action.type) {

  case 'SELECT_CATEGORY':
    if (action.payload !== 'all') {
      let filteredProducts = initialState.productList.filter(product => product.category === action.payload);
      return {productList: filteredProducts};
    }
    return initialState;
  case 'GET_PRODUCTS':
    return action.payload;
  default:
    return state;
  }
}

export default {productReducer, getProducts} ;

