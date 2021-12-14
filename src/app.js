import './app.scss';
// import { connect } from 'react-redux';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Storefront from './components/storefront/storefront';
import getProducts from '../src/store/actions/products';
import getCategories from '../src/store/actions/categories';
import { useEffect } from 'react';
import { connect } from 'react-redux';


function App(props) {

  useEffect(() => {
    props.getAllProducts();
    props.getAllCategories();
  }, []);

  return (
    <>
      <Header />
      <Storefront/>
      <Footer />
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  getAllProducts: () => dispatch(getProducts()),
  getAllCategories: () => dispatch(getCategories()),
});

export default connect(null, mapDispatchToProps)(App);

