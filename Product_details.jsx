import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Paper, Button, Card, Typography, Grid, CardMedia, CardActions, CardContent, Box, TextField, Container, MenuItem } from '@mui/material';
import { ArrowForward, CheckCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const ProductDetails = ({ addToCart }) => {
  const [quantity, setQuantity] = useState(10);
  
  const navigate = useNavigate();
 
  const categoriesData = [
    // Your category and product data here...
    {
      title: 'Wall decor',
      products: [
        {
          id: 1,
         name: "Lord Ganesha",
         //quantity: "10",
          price: "1299",

         image: "https://metalkart.in/cdn/shop/products/sukhkarta-mangalkarta-ganesha-wall-painting-36-x-36-inches-517857_1280x.jpg?v=1695954201", // Replace with actual image URL
        },
        
        {
          id: 2,
          name: "Peacock",
          //quantity: "10",
          price: "1299",
          image: "https://hitchki.in/wp-content/uploads/In-Circle-Antique-Peacock-Wall-Decor-1.jpg",
        },
        {
          id: 3,
          name: "Pranjals home wall decor",
          //quantity: "10",
          price: "899",
          image: "https://m.media-amazon.com/images/I/71dkL0GxoCL.jpg",
        },
        {
          id: 4,
          name: "Radha Krishna wall decor",
          // quantity: "10",
          price: "1199",
          image: "https://m.media-amazon.com/images/I/51m49weZpEL._SY300_SX300_QL70_FMwebp_.jpg",
        },
         {
          id: 5,
          name: "Gujarathi home decor",
          // quantity: "10",
          price: "1199",
          image: "https://m.media-amazon.com/images/I/71k9S5YWqyL.jpg",
        },
      
        {
          id: 6,
          name: "Buddha wall decor",
          // quantity: "10",
          price: "1199",
          image: "https://cdn.shopify.com/s/files/1/0632/2526/6422/products/1_12409755-6ff2-4a3f-86db-116064f7c817.jpg?v=1686913398&width=600",
        },
      ],
    },
    {
      title: 'Electronics',
      products: [
        {
          id: 7,
          name: "Acer Tv",
          // quantity: "10",
          price: "15000",
          image: "https://m.media-amazon.com/images/I/5126gXnEjFL._AC_UY327_FMwebp_QL65_.jpg",
        },
        {
          id: 8,
          name: "Samsung Galaxy Tab A9+",
          // quantity: "10",
          price: "23,999",
          image: "https://m.media-amazon.com/images/I/61afkty1foL._SX679_.jpg",
        },
        {
          id: 9,
          name: "Acer Aspire",
          // quantity: "10",
          price: "34,990",
          image: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/BAU-Nov/Laptop-Days/LaptopDays_NG_04.jpg",
        },
        {
          id: 10,
          name: "Oneplus Nord CE 3 5G ",
          // quantity: "10",
          price: "24,999",
          image: "https://m.media-amazon.com/images/I/61abLrCfF7L._SX679_.jpg",
        },
        {
          id: 11,
          name: "All-New Echo Dot",
          // quantity: "10",
          price: "15,000",
          image: "https://m.media-amazon.com/images/I/71jNr0MoZEL._SX679_.jpg",
        },
        {
          id: 12,
          name: "Acer Aspire",
          // quantity: "10",
          price: "34,990",
          image: "https://m.media-amazon.com/images/I/61o5ptuyUtL._AC_UL480_FMwebp_QL65_.jpg",
        },
      ],
    },
    {
    title: 'Furniture',
    products: [
      {
        id: 13,
        name: "Wood Entertainment Unit ",
        // quantity: "10",
        price: "10,199",
        image: "https://m.media-amazon.com/images/I/81QLjRyE4-L._SL1500_.jpg",
      },
      {
        id: 14,
        name: "W.S.HANDICRAFTS Sofa ",
        // quantity: "10",
        price: "37,000",
        image: "https://m.media-amazon.com/images/I/81Px9ZUKM7L._SX679_.jpg",
      },
      {
        id: 15,
        name: " Arvon 4 Seater Sofa ",
        // quantity: "10",
        price: "16,999",
        image: "https://m.media-amazon.com/images/I/61KdH26dOnL._SX679_.jpg",
      },
      {
        id: 16,
        name: "Vergo Plush Dining Chair",
        // quantity: "10",
        price: "7,990",
        image: "https://m.media-amazon.com/images/I/71SDhq57D-L._SX679_.jpg",
      },
          {
            id: 17,
            name: "Brown Sofa ",
            price: "15000",
            // quantity:"5",
            image: "https://img.freepik.com/free-photo/gray-sofa-brown-living-room-with-copy-space_43614-954.jpg?size=626&ext=jpg",
          },
          {
            id: 18,
            name: "Study table",
            price: "2,200",
            // quantity:"15",
            image: "https://img.freepik.com/free-photo/workspace-objects-table_144627-13328.jpg?w=360&t=st=1704599072~exp=1704599672~hmac=aa0ef91a3224e314b353e0988f66baa040e843d3a7fd6c3ffc527d14301f1fc2",
          },
    ],
    },
   
  ];


  const handleAddToCart = (product) => {
    const productToAdd = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: parseInt(quantity,30),
      img: product.image, 
    };

    // Assuming addToCart is a function you've defined to add the product to the cart
    addToCart(productToAdd);
    window.alert(`${product.name} added to the cart!`);
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800, // 800 pixels and above
        settings: { 
          slidesToShow: 2,
        },
      },
    ],
  };
  
  const currencies = [
    {
      value: '30',
      label: '30',
    },
    {
      value: '50',
      label: '50',
    },
    {
      value: '70',
      label: '70',
    },
    {
      value: '90',
      label: '90',
    },
  ];
  return (
    
    <div>
   
      {categoriesData.map((category, i) => (
        <Container key={i} maxWidth="xl " sx={{ marginTop: 3 }}>
          <Typography variant="h4" gutterBottom>
            {category.title}
          </Typography>
          <CardActions style={{ justifyContent: 'center' }}>
  {/* Other components or content */}
</CardActions>
          <Slider {...settings}>
            {category.products.map((product) => (
              <Grid item xs={6} sm={2} md={3} key={product.id}>
                <Paper elevation={10} sx={{ p: 3, textAlign: 'center', backgroundColor: 'lightblue' }}>
                  <Card sx={{ maxWidth: 350, height: 500, margin: 'auto' }}>
                    <CardMedia
                      component="img"
                      alt={product.name}
                      height="300"
                        maxWidth="100%"
                      image={product.image}
                      sx={{
                        objectFit: 'contain',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    
                    />
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        {product.name}
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      {/* <TextField
                          variant="filled"
                          value={product.quantity}
                          label={`Qty`}
                          InputProps={{ readOnly: true }}
                          sx={{ width: '100px', height: '10px', marginTop: 1 }}
                        // /> */}
                        
        <TextField
                          id="outlined-select-currency"
                          select
                          value={product.quantity}
                          label="Qty"
                          sx={{ width: '100px', height: '10px', marginTop: 1 }}
                        >
                          {currencies.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </TextField>
                        <TextField
                          variant="outlined"
                          value={product.price}
                          label={`Rs`}
                          InputProps={{ readOnly: true }}
                          sx={{ width: '100px', height: '10px', marginTop: 1 }}
                        />
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 8 }}>
                        <Button
                          color="primary"
                          variant="contained"
                          endIcon={<ArrowForward />}
                          onClick={() => handleAddToCart(product)}
                          component={Link}
                          to="/Cart"
                        >
                          Add to Cart
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Paper>
              </Grid>
            ))}
          </Slider>
        </Container>
       ))}
    </div>
  );
};

export default ProductDetails;
