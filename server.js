const express = require('express');
const {Pool} = require('pg');
const cors = require('cors');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL connection configuration
const pool = new Pool({
  user: 'postgres', // read before you enter your password which user you are signing in for in pg admin, keep that user here 
  host: 'localhost', // keep this same
  database: 'postgres', // your database name
  password: 'madhulika@123', // the password you enter when you start pgadmin
  port: 5432, // default PostgreSQL port
});

// signup
app.post('/signup', async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const userCheck = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userCheck.rows.length > 0) {
      return res.status(400).json('email already exists');
    }
    console.log(req.body)
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await pool.query('INSERT INTO users ("userName",  email, password) VALUES ($1, $2, $3) RETURNING *', [userName,  email, hashedPassword]);
    console.log(user)
    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});
// signin
app.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (user.rows.length === 0) {
      return res.status(400).json('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.rows[0].password);
    if (!isPasswordValid) {
      return res.status(400).json('Invalid credentials');
    }

    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});
//forgot password
app.post('/Forgotpassword', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user with the provided email exists
    const isUser = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (isUser.rows.length === 0) {
      return res.status(400).json('User not found');
    }

    // Generate a temporary token and send it to the user for the forgot password flow
    // (The following line is a placeholder; implement your own logic for token generation and sending)

    // Update the user's password based on the provided email
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await pool.query('UPDATE users SET password = $1 WHERE email = $2 RETURNING *', [hashedPassword, email]);

    // Return the updated user details (or a success message)
    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});



// get random products
app.get('/products/random', async (req, res) => {
  try {
    const products = await pool.query('SELECT * FROM products ORDER BY RANDOM() LIMIT 5');
    res.json(products.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// get product list
app.get('/products', async (req, res) => {
  try {
    const products = await pool.query('SELECT * FROM products');
    res.json(products.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// get product by category_id
app.get('/getProductByCategoryId', (req, res) => {
  try {
    pool.query(`SELECT * FROM public.products WHERE category_id = ${req.query.id}`, (err, result) => {
      if (err) {
        res.sendStatus(500);
      } else {
        console.log(result.rows)
        res.json(result.rows);
      }
    })
  } catch (error) {
    console.log(error)
    return error
  }
});

// get product by id
app.get('/getProductById', (req, res) => {
  try {
    pool.query(`SELECT * FROM public.products WHERE id = ${req.query.id}`, (err, result) => {
      if (err) {
        res.sendStatus(500);
      } else {
        console.log(result.rows)
        res.json(result.rows);
      }
    })
  } catch (error) {
    console.log(error)
    return error
  }
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}`); 
});

