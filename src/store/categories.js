
// let initialState = {
//   categoryList: [
//     {
//       name: 'all',
//       displayName: 'All the plants',
//       description: 'Plants on plants'
//     },
//     {
//       name: 'indoor',
//       displayName: 'Indoor plants',
//       description: 'Plants that like the pampered life'
//     },
//     {
//       name: 'outdoor',
//       displayName: 'Outdoor plants',
//       description: 'Plants ready for an adventure'
//     },
//     {
//       name: 'easy',
//       displayName: 'If you kill plants',
//       description: 'Plants that even you can keep alive'
//     }
//   ],
//   activeCategory: 'all'
// };

let initialState = {
  categoryList: [],
  activeCategory: 'all'
};

function categoryReducer(state = initialState, action) {
  // destructure type and payload from the action
  let {type, payload} = action;

  switch (type) {
  case 'SELECT_CATEGORY':

    if(payload) {
      return {...state, activeCategory: payload };
    } else {
      return {...state, activeCategory: state.activeCategory };
    }
  case 'GET_CATEGORIES':
    return {...state, categoryList: state.categoryList.concat(payload)};
  default:
    return state;
  }
}

export default categoryReducer;
