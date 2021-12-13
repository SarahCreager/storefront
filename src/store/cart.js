
let initialState = {
  cart: [],
  totalItems: 0,
};

function cartReducer(state = initialState, action) {

  switch (action.type) {

  case 'ADD_TO_CART':
    if (action.payload) {
      let cartItem = action.payload;
      if (state.cart.includes(cartItem)){
        cartItem.count++;
        return {...state, totalItems: state.totalItems + 1 };
      } else {
        // cartItem.count += 1;
        cartItem.count = 1;
        state.totalItems++;
        return {...state, cart: [...state.cart, action.payload] };
      }
    }
    return initialState;
  case 'REMOVE_FROM_CART':
    if (action.payload) {
      let cartItem = action.payload;
      if (state.cart.includes(cartItem)){
        cartItem.count--;
        return {...state, totalItems: state.totalItems - 1 };
      } else {
        cartItem.count = cartItem.count - 1;
        state.totalItems--;
        return {...state, cart: [...state.cart, action.payload] };
      }
    }
    return initialState;
  default:
    return state;
  }
}

export default cartReducer;
