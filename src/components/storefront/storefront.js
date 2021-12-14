import React from 'react';

import Categories from './categories';
import Products from './products';
import ProductDetails from '../products/details';
import { connect } from 'react-redux';

function Storefront(props) {

  return (
    <>
      {props.activeProduct ? <ProductDetails /> : <> <Categories /> <Products /> </>}
    </>
  );
}

const mapStateToProps = state => ({
  activeProduct: state.products.selectedProduct,
});

export default connect(mapStateToProps, null)(Storefront);
