import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({
       userName: '',
        password: '',
        email: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make a POST request to your backend API
            const response = await axios.post('http://localhost:5000/signup', formData).then((response) => {
                console.log(JSON.stringify(response.data));
                // Check if the response contains an 'id'
                if (response.data.id) {
                    // Set a session token in localStorage
                    localStorage.setItem('token', response.data.id);
                    // Redirect to the index page (or any other page)
                    navigate('/');
                } else {
                    // If there is no 'id' in the response, throw an error
                    console.error('API Error:', response.data);
                    alert(response.data);
                }
            }).catch((error) => {
                console.log('API Error: inside catch', error.response.data);
                alert(error.response.data);
            });
            console.log("after response#######", response)
        } catch (error) {
            // Handle error
            console.error('API Error:', error.message);
        }
    };
    return (
<Container
      maxWidth="xl"
      style={{
        display: "grid",
        padding:'90px',
        paddingRight:'300px',
        flexDirection: "center",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundImage: 'url(https://i.pinimg.com/564x/4a/0f/c5/4a0fc59d8adcd29141ecdaeb7916f65c.jpg)',
        backgroundSize:"80%",
        backgroundPosition:"center",
      }}
    // return (
    //   <Container maxWidth='xl' style={{
    //     backgroundImage: 'url(https://i.pinimg.com/564x/4a/0f/c5/4a0fc59d8adcd29141ecdaeb7916f65c.jpg)',
    //     padding
    //            display: "flex",
    //            flexDirection: "column",
    //            alignItems: "center",
    //            justifyContent: "center",
    //            height: "100vh", // This sets the container to take the full viewport height
    //          }}
         >
               <Paper elevation={3} style={{ padding: "20px" , textAlign: "center"}}>
               <h1 style={{color:"blue"}}>Sign Up</h1>
            
                
                    <form onSubmit={handleSubmit}>
                        
                        <TextField
                            label="UserName"
                            name="userName"
                            value={formData.userName}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <Button type="submit" variant="contained" color="primary">
                            SIGN UP
                        </Button>
                    </form> 
                    </Paper>
                </Container>
    );
};

export default Signup;
