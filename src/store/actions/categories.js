import axios from 'axios';

const getCategories = () => async (dispatch) => {
  let response;
  try {
    response = await axios.get(`https://creager-storefront-server.herokuapp.com/categories`);
  } catch(e) {
    console.log('getCategories error:', e);
  }
  dispatch({
    type: 'GET_CATEGORIES',
    payload: response?.data?.categoryList
  });
};

export default getCategories;
