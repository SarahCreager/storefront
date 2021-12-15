import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    productList: [],
    filteredProducts: [],
    selectedProduct: null
  },
  reducers: {
    selectCategory(state, action) {
      if (action.payload !== 'all') {
        let filteredProductList = state.productList.filter(product => product.category === action.payload);
        return { ...state, filteredProducts: filteredProductList };
      }
      return {...state, filteredProducts: state.productList};
    },
    getOneProduct(state, action) {
      state.selectedProduct = action.payload;s
    },
    closeProductView(state, action) {
      state.selectedProduct = null;
    },
    getTheProducts(state, action) {
      state.productList= action.payload;
      state.filteredProducts= action.payload;
      state.selectedProduct= null;
    },
  }
});

export const { selectCategory, getOneProduct, getTheProducts, closeProductView } = productsSlice.actions;

export default productsSlice.reducer;