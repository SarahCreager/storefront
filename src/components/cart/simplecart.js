import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { connect } from 'react-redux';
import SpaIcon from '@mui/icons-material/Spa';
import GrassIcon from '@mui/icons-material/Grass';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function SimpleCart(props) {
  const [state, setState] = React.useState({ right: false, });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ListItemText primary='Cart' />
      <Divider />
      <List>
        {props.cart.map((product, index) => (
          <ListItem button key={index}>
            <ListItemIcon>
              {index % 2 === 0 ? <SpaIcon /> : <GrassIcon />}
            </ListItemIcon>
            <ListItemText secondary={product.count} />
            <ListItemText primary={product.name} />
          </ListItem>
        ))}
        <Divider />
        <ListItem>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary={props.totalItems} />
          <ListItemText primary='CART TOTAL' />
        </ListItem>

      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {['cart'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cart: state.cart.cart,
    totalItems: state.cart.totalItems,
  };
};

// dispatches actions to our reducer
const mapDispatchToProps = dispatch => ({
  addToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product }),
});

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
