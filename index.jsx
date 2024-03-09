import React from "react";
import { styled, alpha } from '@mui/material/styles';

import {InputBase,
  AppBar,
  Button,
  Container,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { ArrowForward, Person, ShoppingBasket} from "@mui/icons-material";
import SimpleImageSlider from "react-simple-image-slider";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";


const images =[
  { url: "https://ultracommerce.co/wp-content/uploads/2022/04/b2b-ecommerce-challenges.jpg" },
  { url: "https://qph.cf2.quoracdn.net/main-qimg-e349ca777b19dea9cf631124a51ea773-pjlq" },
  { url: "https://m.media-amazon.com/images/I/51m49weZpEL._SY300_SX300_QL70_FMwebp_.jpg" },
  { url: "https://m.media-amazon.com/images/I/81QLjRyE4-L._SL1500_.jpg" },
  { url: "https://m.media-amazon.com/images/I/71SDhq57D-L._SX679_.jpg" },
  
];
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '50ch',
    },
  },
}));
//const menuId = 'primary-search-account-menu';


const products = [

  {
    id: 1,
   name: "Lord Ganesha",
    price: "1299",
   image: "https://metalkart.in/cdn/shop/products/sukhkarta-mangalkarta-ganesha-wall-painting-36-x-36-inches-517857_1280x.jpg?v=1695954201", // Replace with actual image URL
  },
  
  {
    id: 2,
    name: "Peacock",
    price: "1299",
    image: "https://hitchki.in/wp-content/uploads/In-Circle-Antique-Peacock-Wall-Decor-1.jpg",
  },
  {
    id: 3,
    name: "Pranjals home wall decor",
    price: "899",
    image: "https://m.media-amazon.com/images/I/71dkL0GxoCL.jpg",
  },
  {
    id: 4,
    name: "Radha Krishna wall decor",
    price: "1199",
    image: "https://m.media-amazon.com/images/I/51m49weZpEL._SY300_SX300_QL70_FMwebp_.jpg",
  },
   {
    id: 5,
    name: "Gujarathi home decor",
    price: "1199",
    image: "https://m.media-amazon.com/images/I/71k9S5YWqyL.jpg",
  },

  {
    id: 6,
    name: "Buddha wall decor",
    price: "1199",
    image: "https://cdn.shopify.com/s/files/1/0632/2526/6422/products/1_12409755-6ff2-4a3f-86db-116064f7c817.jpg?v=1686913398&width=600",
  },
  {
    id: 7,
    name: "Acer Tv",
    price: "15000",
    image: "https://m.media-amazon.com/images/I/5126gXnEjFL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    id: 8,
    name: "Samsung Galaxy Tab A9+",
    price: "23,999",
    image: "https://m.media-amazon.com/images/I/61afkty1foL._SX679_.jpg",
  },
  {
    id: 9,
    name: "Acer Aspire",
    price: "34,990",
    image: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/BAU-Nov/Laptop-Days/LaptopDays_NG_04.jpg",
  },
  {
    id: 10,
    name: "Oneplus Nord CE 3 5G ",
    price: "24,999",
    image: "https://m.media-amazon.com/images/I/61abLrCfF7L._SX679_.jpg",
  },
  {
    id: 11,
    name: "All-New Echo Dot",
    price: "15,000",
    image: "https://m.media-amazon.com/images/I/71jNr0MoZEL._SX679_.jpg",
  },
  {
    id: 12,
    name: "Acer Aspire",
    price: "34,990",
    image: "https://m.media-amazon.com/images/I/61o5ptuyUtL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    id: 13,
    name: "Wood Entertainment Unit ",
    price: "10,199",
    image: "https://m.media-amazon.com/images/I/81QLjRyE4-L._SL1500_.jpg",
  },
  {
    id: 14,
    name: "W.S.HANDICRAFTS sofa",
    price: "37,000",
    image: "https://m.media-amazon.com/images/I/81Px9ZUKM7L._SX679_.jpg",
  },
  {
    id: 15,
    name: "Arvon 4 Seater sofa set ",
    price: "16,999",
    image: "https://m.media-amazon.com/images/I/61KdH26dOnL._SX679_.jpg",
  },
  {
    id: 16,
    name: "Vergo Plush Dining Chair",
    price: "7,990",
    image: "https://m.media-amazon.com/images/I/71SDhq57D-L._SX679_.jpg",
  },
];
const IndexPage = () =>{
  return(
    <div>
      <CssBaseline/>
      <AppBar position="static" sx={{ backgroundColor:'#212121' }} >
        <Toolbar >
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon fontSize="large"/>
          </IconButton>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
        
             
          B 2 B
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              justifyContent="center"
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          
          <Button variant="contained" color="primary" component={Link} to="/contactpage" style={{marginLeft:'20px',marginRight:'20px'}}>
       CONTACT
      </Button>
      <Button variant="contained"  color="primary" component={Link} to="/cart" startIcon={<ShoppingBasket size="large"/>} style={{marginLeft:'20px',marginRight:'20px'}}>
       CART
      </Button>
          <Button variant="contained"  color="primary" component={Link} to="/Signup" style={{marginLeft:'20px',marginRight:'20px'}}>
       SIGN UP
      </Button>
      <Button variant="contained"  color="primary" component={Link} to="/Signin" style={{marginRight:'20px'}} >
        SIGN IN
      </Button>
  
      
        </Toolbar>
      </AppBar>


   
    <Container maxWidth="md" sx={{ marginTop: 3 }}>
         {/* Image Slider */}
         <SimpleImageSlider
         width={896}
         height={500}
         images={images}
         showBullets={true}
        showNavs={true}
     />
    </Container>
    
    
    
         {/* Random Products */}
         <Grid container spacing={3} sx={{ marginTop: 2 }} columns={16}>
           {products.map((product) => ( 
             <Grid item xs={8} sm={6} md={4}  key={product.id}>
              <Paper elevation={10}>
                 <Card>
                   <CardMedia
                    component="img"
                    alt={product.name}
                    height="300"
                    image={product.image}
                  /> 
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {product.price}
                    </Typography>
                    
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
          ))}
        </Grid>
      
    

    </div>
  );
};
export default IndexPage;
