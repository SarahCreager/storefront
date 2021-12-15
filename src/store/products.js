
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

