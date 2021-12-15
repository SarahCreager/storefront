import axios from 'axios';
import { getOneProduct } from '../slices/products.slice';

const getProduct = (id) => async (dispatch) => {
  let response;
  try {
    response = await axios.get(`https://creager-storefront-server.herokuapp.com/products/${id}`);
  } catch (e) {
    console.log('getProducts error:', e);
  }
  dispatch(getOneProduct(response?.data));
};

export default getProduct;
