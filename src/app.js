import './app.scss';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Storefront from './components/storefront/storefront';
import getProducts from '../src/store/actions/products';
import getCategories from '../src/store/actions/categories';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter,
  Route,
  Routes as Switch,
} from 'react-router-dom';

function App(props) {

  useEffect(() => {
    props.getAllProducts();
    props.getAllCategories();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' element={<Storefront />}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  getAllProducts: () => dispatch(getProducts()),
  getAllCategories: () => dispatch(getCategories()),
});

export default connect(null, mapDispatchToProps)(App);

