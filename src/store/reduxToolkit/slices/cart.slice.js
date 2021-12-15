import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    totalItems: 0,
  },
  reducers: {
    addToCart(state, action) {
      let cartItem = action.payload;
    
      if(state.cart.includes(cartItem)) {
        cartItem.count++;
        return {...state, totalItems: state.totalItems + 1 };
      } else {
        cartItem.count = 1;
        state.totalItems++;
        return {...state, cart: [...state.cart, action.payload] };
      }
    },
    removeFromCart(state, action) {
      let cartItem = action.payload;
      if (state.cart.includes(cartItem)){
        cartItem.count--;
        return {...state, totalItems: state.totalItems - 1 };
      } else {
        cartItem.count = cartItem.count - 1;
        state.totalItems--;
        return {...state, cart: [...state.cart, action.payload] };
      }
    },
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;