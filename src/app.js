import './app.scss';
// import { connect } from 'react-redux';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';

//pass in props
function App() {

  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

// layer the state to props
// const mapStateToProps = state => {
//   return {
//     votes: state.votes,
//   }
// }

// // this allows actions to be pumped through our reducer.
// const mapDispatchToProps = dispatch => ({
//   increment: (name) => dispatch({type: 'ADD_VOTE', payload: name}),
//   reset: () => dispatch({ type: 'RESET_VOTES' })
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
