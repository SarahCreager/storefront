import snake from '../img/snakeplant.jpg';
import strawberry from '../img/strawberryplant.png';
import fiddle from '../img/fiddleplant.png';

let initialState = {
  productList: [
    {
      name: 'Fiddle Leaf Fig',
      category: 'indoor',
      price:'$$',
      inventory: 20, 
      description: 'This tall, dramatic plant adds atmosphere to any room.',
      img: fiddle
    },
    {
      name: 'Strawberry Plant',
      category: 'outdoor',
      price:'$',
      inventory: 30, 
      description: 'A plant that also serves as a tasty treat.',
      img: strawberry
    },
    {
      name: 'Snake Plant',
      category: 'easy',
      price:'$$',
      inventory: 10, 
      description: 'The plant that thrives on neglect.',
      img: snake
    }
  ]
};

function productReducer(state = initialState, action) {

  switch (action.type) {

  case 'SELECT_CATEGORY':
    if (action.payload){
      let filteredProducts = initialState.productList.filter(product => product.category === action.payload);
      return { productList: filteredProducts };
    }
    return initialState;
  default:
    return state;
  }
}

export default productReducer;

