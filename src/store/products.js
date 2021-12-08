// let initialState = {
//   products: [
//     { name: 'Jacob', voteCount: 0 },
//     { name: 'Adrian', voteCount: 0 },
//     { name: 'Hexx', voteCount: 0 },
//   ],
//   totalVotes: 0,
// };

// function productReducer(state = initialState, action) {

//   let { type, payload } = action;

//   switch (type) {
//   case 'ADD_VOTE':

//     let totalVotes = state.totalVotes + 1;
//     let productList = state.products.map(product => {
//       if (product.name === payload) {
//         return {...product, voteCount: product.voteCount + 1 };
//       } else {
//         return product;
//       }
//     });

//     return { productList, totalVotes };
//   case 'RESET_VOTES':
//     return initialState;
//   default:
//     return state;
//   }
// }

// export default productReducer;

