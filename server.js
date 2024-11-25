const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Database Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'postgres',       // Your MySQL username
  password: 'playboysad',       // Your MySQL password
  database: 'smg' // Database name
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database');
});

// Login Endpoint
app.post('/api/login', (req, res) => {
  const { studentId, password } = req.body;

  // Query the database to check if user exists with the provided studentId and password
  const query = 'SELECT * FROM users WHERE student_id = ? AND password = ?';
  
  db.query(query, [studentId, password], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }

    if (results.length > 0) {
      res.status(200).json({ message: 'Login successful', success: true });
    } else {
      res.status(401).json({ message: 'Invalid credentials', success: false });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
