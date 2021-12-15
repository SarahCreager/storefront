import axios from 'axios';
import { getTheProducts } from '../slices/products.slice';

const getProducts = () => async (dispatch) => {
  let response;
  try {
    response = await axios.get(`https://creager-storefront-server.herokuapp.com/products`);
  } catch (e) {
    console.log('getProducts error:', e);
  }
  dispatch(getTheProducts(response?.data?.productList));
};

export default getProducts;
