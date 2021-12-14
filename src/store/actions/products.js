import axios from 'axios';

const getProducts = () => async (dispatch) => {
  let response;
  try {
    response = await axios.get(`https://creager-storefront-server.herokuapp.com/products`);
  } catch (e) {
    console.log('getProducts error:', e);
  }
  dispatch({
    type: 'GET_PRODUCTS',
    payload: response?.data?.productList
  });
};

export default getProducts;
