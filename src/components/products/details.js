import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
// import Container from '@mui/material/Container';
import { connect } from 'react-redux';
import './details.scss';
const ProductDetails = props => {

  return (
    <>
      <Paper>
        <Grid container id='detailContainer'>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" >
            {props.activeProduct.name}
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            {props.activeProduct.description}
          </Typography>
          <Grid item xs={12}>
            <img alt={props.activeProduct.name} src={props.activeProduct.img} />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" color="textSecondary" paragraph>
              In Stock: <strong>{props.activeProduct.inventory}</strong>
            </Typography>
          </Grid>
          <Grid item xs={6} >
            <Typography variant="h5" paragraph>
              {props.activeProduct.price}
            </Typography>
          </Grid>
          <Grid id='buttons'>
            <Button size="medium" id='addToCart' onClick={() => props.addToCart(props.activeProduct)} variant="contained">Add to cart</Button>
            <Button size="medium" id='home' onClick={() => props.exitProductView()} variant="contained">Back to home</Button>
          </Grid>
        </Grid>
      </Paper>
    </>

  );
};

const mapStateToProps = state => ({
  activeProduct: state.products.selectedProduct,
});

const mapDispatchToProps = dispatch => ({
  addToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product }),
  exitProductView: () => dispatch({ type: 'CLOSE_PRODUCT_VIEW' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);

