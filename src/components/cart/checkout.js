import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './checkout.scss';

function Checkout() {

  return (
    <div id='checkoutContainer'>
      <TextField
        required
        id="standard-required"
        label="Required"
        defaultValue="Full Name"
        variant="outlined"
      />
      <TextField
        required
        id="standard-required"
        label="Required"
        defaultValue="Address"
        variant="outlined"
      />
      <TextField
        required
        id="standard-required"
        label="Required"
        defaultValue="City"
        variant="outlined"
      />
      <TextField
        required
        id="standard-required"
        label="Required"
        defaultValue="State"
        variant="outlined"
      />
      <TextField
        required
        id="standard-required"
        label="Required"
        defaultValue="Zip"
        variant="outlined"
      />
      <TextField
        required
        id="standard-required"
        label="Required"
        defaultValue="Credit Card #"
        variant="outlined"
      />
      <TextField
        required
        id="standard-required"
        label="Required"
        defaultValue="Expiration"
        variant="outlined"
      />
      <TextField
        required
        id="standard-required"
        label="Required"
        defaultValue="CVV"
        variant="outlined"
      />
      <Button id='checkoutButton' variant="contained">PLACE YOUR ORDER</Button>
    </div>
  );
}

export default Checkout;
