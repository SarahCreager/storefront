import axios from 'axios';
import { getCategories } from '../slices/categories.slice';

const getCategories = () => async (dispatch) => {
  let response;
  try {
    response = await axios.get(`https://creager-storefront-server.herokuapp.com/categories`);
  } catch(e) {
    console.log('getCategories error:', e);
  }
  dispatch(getCategories(response?.data?.categoryList));
};

export default getCategories;
