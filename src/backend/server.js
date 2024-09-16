const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const env = require('dotenv');

env.config();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Successfully connected to the database.');
});

app.post('/api/submit-contact', (req, res) => {
  const { fullName, email, reasons, budget, message } = req.body;
  const query = 'INSERT INTO contactForm (name, email, reasons, budget, message) VALUES (?, ?, ?, ?, ?)';
  
  db.query(
    query,
    [fullName, email, reasons.join(', '), budget, message],
    (error, results) => {
      if (error) {
        console.error('Error inserting into database:', error);
        res.status(500).json({ error: 'Failed to submit form' });
      } else {
        res.status(201).json({ message: 'Form submitted successfully' });
      }
    }
  );
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));