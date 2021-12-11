import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import './products.scss';
import { connect } from 'react-redux';
import {getProducts} from '../../store/products.js';

const Products = props => {
  
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <Container id='productContainer' maxWidth="md" data-testid="products">
        <Grid container spacing={4}>
          {props.products.map((product) => (
            <Grid item key={product.name} xs={12} sm={6} md={4}>
              <Card id='card'>
                <CardMedia
                  component="img"
                  height="220"
                  src={product.img}
                  title={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" id='name'>
                    {product.name}
                  </Typography>
                  <Typography id='description'>
                    {product.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" id='addToCart' onClick={() => props.addToCart(product)} >Add to cart</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

const mapStateToProps = state => ({
  products: state.products.productList,
  cart: state.cart.cart
});

const mapDispatchToProps = dispatch => ({
  selectCategory: (category) => dispatch({ type: 'SELECT_CATEGORY', payload: category }),
  addToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product }),
  getAllProducts: () => dispatch(getProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);

