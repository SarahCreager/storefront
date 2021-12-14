// import snake from '../img/snakeplant.jpg';
// import strawberry from '../img/strawberryplant.png';
// import fiddle from '../img/fiddleplant.png';


// let initialState = {
//   productList: [
//     {
//       name: 'Fiddle Leaf Fig',
//       category: 'indoor',
//       price: '$$',
//       inventory: 20,
//       description: 'This tall, dramatic plant adds atmosphere to any room.',
//       img: fiddle,
//       count: 0
//     },
//     {
//   name: 'Strawberry Plant',
//   category: 'outdoor',
//   price: '$',
//   inventory: 30,
//   description: 'A plant that also serves as a tasty treat.',
//   img: strawberry,
//   count: 0
// },
//     {
//       name: 'Snake Plant',
//       category: 'easy',
//       price: '$$',
//       inventory: 10,
//       description: 'The plant that thrives on neglect.',
//       img: snake,
//       count: 0
//     }
//   ],
//   filteredProducts: []
// };

let initialState = {
  productList: [],
  filteredProducts: [],
  selectedProduct: null
};

function productReducer(state = initialState, action) {

  switch (action.type) {

  case 'SELECT_CATEGORY':
    if (action.payload !== 'all') {
      let filteredProductList = state.productList.filter(product => product.category === action.payload);
      return { ...state, filteredProducts: filteredProductList };
    }
    return {...state, filteredProducts: state.productList};
  case 'GET_PRODUCTS':
    return { ...state, productList: action.payload, filteredProducts: action.payload, selectedProduct: null };
  case 'GET_PRODUCT':
    return { ...state, selectedProduct: action.payload };
  case 'CLOSE_PRODUCT_VIEW':
    return { ...state, selectedProduct: null };
  default:
    return state;
  }
}

export default productReducer;

