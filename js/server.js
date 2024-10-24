const express = require('express');
const mysql = require('mysql');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true })); // Parse form data
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from public folder

// Database connection (replace with your MySQL credentials)
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Your MySQL password
  database: 'appraisal_db' // Your MySQL database name
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected...');
});

// Route to handle form submission
app.post('/submit-appraisal', (req, res) => {
  const { teacherName, position, school, assessor, category, subcategory, rating, comments } = req.body;

  const sql = `INSERT INTO appraisals (teacher_name, position, school, assessor, category, subcategory, rating, comments)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
  const values = [teacherName, position, school, assessor, category, subcategory, rating, comments];

  db.query(sql, values, (err, result) => {
    if (err) return res.status(500).send('Error saving appraisal');
    res.send('Appraisal submitted successfully');
  });
});

// Route to generate reports
app.get('/generate-report', (req, res) => {
  const { category, subcategory } = req.query;
  
  const sql = `SELECT * FROM appraisals WHERE category = ? AND subcategory = ?`;
  db.query(sql, [category, subcategory], (err, results) => {
    if (err) return res.status(500).send('Error generating report');
    res.json(results);
  });
});

// Start server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
