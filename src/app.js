import './app.scss';
// import { connect } from 'react-redux';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Storefront from './components/storefront/storefront';


function App() {

  return (
    <>
      <Header />
      <Storefront/>
      <Footer />
    </>
  );
}

export default App;
