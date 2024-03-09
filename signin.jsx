import React, { useState } from "react";
import { TextField, Button, Container, Link, Paper, InputAdornment, Checkbox, FormControlLabel, Grid, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  
  const navigate = useNavigate();

  const handleSignIn = async () => {
    // Basic validation (you may want to add more robust validation)
    if (!email || !password) {
      alert("Please provide both email and password.");
      return;
    }

    try {
      // Assuming there is a fictional authentication API endpoint
      const response = await axios.post("http://localhost:5000/Signin", { email, password });
      alert("Authentication successful");
      // Handle successful authentication (customize based on your needs)
      console.log("Authentication successful", response.data);
      navigate("/HomePage");
    } catch (error) {
      // Handle authentication failure (customize based on your needs)
      alert("Authentication failed. Please check your credentials.");
      console.error("Authentication failed", error.message);
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
    >
      <Paper elevation={3} style={{ padding: "20px" , textAlign: "center" }}>
               <h1 style={{color:"blue"}}>Sign In</h1>
      
        
        <form>
          {/* Email TextField */}
          <TextField
            required
            id="email-input"
            label="Email Address"
            fullWidth
            margin="normal"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon fontSize="large" />
                </InputAdornment>
              ),
            }}
          />
          {/* Password TextField */}
          <TextField
            required
            id="password-input"
            label="Password"
            fullWidth
            margin="normal"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon fontSize="large" />
                </InputAdornment>
              ),
            }}
          />
          <FormControlLabel
            control={<Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} value={"remember"} color="primary" />}
            label="Remember me?"
          />
          <div style={{ textAlign: "center" }}>
            <Button variant="contained" color="primary" style={{ width: "30%" }} onClick={handleSignIn}>
              SIGN IN
            </Button>
          </div>

          <div style={{ marginTop: "20px" }}>
            <Grid container justifyContent="space-between">
              <Link href="/Forgotpassword" variant="body1">
                {"Forgot Password"}
              </Link>
              <Link href="/Signup" variant="body1">
                {"Don't have an account? Register"}
              </Link>
            </Grid>
          </div>
        </form>
      </Paper>
    </Container>
  );
}

export default Signin;
