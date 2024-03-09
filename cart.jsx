import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Badge,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Toolbar,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = ({ cart, onRemoveFromCart }) => {
  const [cartItems, setCartItems] = useState(cart);

  // Calculate total price
  const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  const discount = 1000; // Assume a discount of Rs. 50

  const handleRemoveFromCart = (productId, productName) => {
    // Find the item with the specified productId
    const removedItem = cartItems.find(item => item.id === productId);

    // Filter out the item with the specified productId
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);

    // Notify the parent component (if needed) that an item has been removed
    if (onRemoveFromCart) {
      onRemoveFromCart(productId);
    }

    // Show an alert message with the product name
    if (removedItem) {
      alert('"${productName}" removed from the cart');
    }
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'blue' }}>
        <Toolbar>
          <IconButton edge="start" color="blue" aria-label="back" component={Link} to="/ProductDetails">
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            My Shopping Cart
          </Typography>
          <IconButton color="blue" component={Link} to="/cart">
            <Badge badgeContent={cartItems.length} color="error">
              <ShoppingCartIcon fontSize="large" />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container
        maxWidth="false"
        sx={{
          paddingTop: '10px',
          marginTop: 4,

          backgroundSize: 'cover',
          backgroundPosition: 'right ',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {cartItems.length === 0 ? (
          <Typography variant="h4" align="center" >
            Your cart is empty.
          </Typography>
        ) : (
          <Grid container spacing={5}>
            <Grid item xs={8} style={{ paddingLeft: '-10px' }}>
              {cartItems.map((item) => (
                <Paper key={item.id} elevation={5} sx={{ marginBottom: 3 }}>
                  <Card style={{ marginBottom: 20, maxWidth: 700, margin: 'auto', backgroundColor: 'whitesmoke' }}>
                    <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                      <Typography variant="h6" component="div">
      {item.name}
    </Typography>
    <Typography variant="body2" color="black">
      Rs.{(item.price * item.quantity).toFixed(2)} {/* Multiply price by quantity */}
    </Typography>
  
                      </div>
                      <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveFromCart(item.id, item.name)}>
                        <DeleteIcon />
                      </IconButton>
                    </CardContent>
                    <CardMedia
                      component="img"
                      alt={item.name}
                      height="140"
                      image={item.img}
                      sx={{
                        objectFit: 'contain',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'right',
                      }}
                    />
                  </Card>
                </Paper>
              ))}
            </Grid>
            <Grid item xs={4}>
              <Paper elevation={5} sx={{ padding: 3, display: 'flex', flexDirection: 'column', backgroundColor: 'whitesmoke' }}>
                <Typography variant="h4" gutterBottom>
                  Cart Summary
                </Typography>
                <Typography variant="h5" gutterBottom>
                  Total Price: Rs.{total}
                </Typography>
                <Typography variant="h5" gutterBottom>
                  Discount: -Rs.{discount}
                </Typography>
              
                <Typography variant="h5" gutterBottom>
                  Grand Total: Rs.{(parseFloat(total) - discount ).toFixed(2)}
                </Typography>
                <Button variant="contained" color="primary" component={Link} to="/checkout">
                  Checkout
                </Button>
              </Paper>
            </Grid>
          </Grid>
        )}
      </Container>
    </>
  );
};

export default Cart;
