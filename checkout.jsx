import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

function Checkout() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement order processing logic here.
    // For demonstration purposes, just updating the orderConfirmed state.
    setOrderConfirmed(true);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit} sx={{
        width: '100%',
        maxWidth: '400px',
        padding: 4,
        display: 'center',
        flexDirection: 'column',
        gap: 4,
        margin: 'center', // Center the form
        '@media (min-width:600px)': {
          maxWidth: '400px',
        },
      }}>
        <Typography variant="h5" gutterBottom >
          Checkout
        </Typography>
        <TextField
          label="Name"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          type="email"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Shipping Address"
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
          fullWidth
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Place Order
        </Button>
      </form>

      {orderConfirmed && (
        <Typography variant="body1" sx={{
          marginTop: 2,
          padding: 2,
          border: '1px solid #ccc',
          borderRadius: 4,
          backgroundColor: '#f3f3f3',
          textAlign: 'center',
        }}>
          Your decision to choose B2B means the world to us. We're committed to providing you with top-notch products and services, and we're confident that your purchase will exceed your expectations.
If you have any questions about your order or if there's anything else we can assist you with, please don't hesitate to reach out to our customer support team at Phone: +919963839890
Email: b2bhomedecor@gmail.com.
Once again, thank you for choosing B2B. We look forward to serving you again in the future.
Thank you for ordering. Further details will be shared to your email.
        </Typography>
      )}
    </Container>
  );
}

export default Checkout;
