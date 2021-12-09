
let initialState = {
  categoryList: [
    {
      name: 'indoor',
      displayName: 'Indoor plants',
      description: 'Plants that like the pampered life'
    },
    {
      name: 'outdoor',
      displayName: 'Outdoor plants',
      description: 'Plants ready for an adventure'
    },
    {
      name: 'easy',
      displayName: 'If you kill plants',
      description: 'Plants that even you can keep alive'
    }
  ],
  activeCategory: 'indoor'
};

function categoryReducer(state = initialState, action) {

  switch (action.type) {
  case 'SELECT_CATEGORY':

    if(state.categoryList.includes(action.payload)) {
      return { categoryList: state.categoryList, activeCategory: action.payload };
    } else {
      return { categoryList: state.categoryList, activeCategory: state.activeCategory };
    }
  default:
    return state;
  }
}

export default categoryReducer;
