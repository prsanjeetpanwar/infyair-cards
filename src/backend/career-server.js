const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const env = require('dotenv');
const multer = require('multer');
const path = require('path');

env.config();

const app = express();
const port = process.env.PORT || 5000;

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
    console.log('Error connecting to the database:', err);
    return;
  }
  console.log('Successfully connected to the database.');
});
// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Database connection setup (unchanged)

app.post('/api/submit-application', upload.single('resume'), (req, res) => {
  const { firstName, lastName, email, position, phoneNumber } = req.body;
  const resumePath = req.file ? req.file.path : null;

  const query = 'INSERT INTO job_applications (first_name, last_name, email, position, phone_number, resume_path) VALUES (?, ?, ?, ?, ?, ?)';

  db.query(
    query,
    [firstName, lastName, email, position, phoneNumber, resumePath],
    (error, results) => {
      if (error) {
        console.error('Error inserting into database:', error);
        res.status(500).json({ error: 'An error occurred while submitting the application' });
      } else {
        res.status(200).json({ message: 'Application submitted successfully' });
      }
    }
  );
});

// Start the server
app.listen(port, () => {
  console.log(`Career server is running on port ${port}`);
});