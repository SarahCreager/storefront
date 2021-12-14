import axios from 'axios';

const getProduct = (id) => async (dispatch) => {
  let response;
  try {
    response = await axios.get(`https://creager-storefront-server.herokuapp.com/products/${id}`);
  } catch (e) {
    console.log('getProducts error:', e);
  }
  dispatch({
    type: 'GET_PRODUCT',
    payload: response?.data,
  });
};

export default getProduct;
