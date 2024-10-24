const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

// Parse URL-encoded bodies (for form submissions)
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files (like your HTML, CSS, JS)
app.use(express.static('public'));

// Initialize SQLite database
const db = new sqlite3.Database('./schools.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

// Route for handling new school registration
app.post('/register-school', (req, res) => {
    const schoolName = req.body.school_name;
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    // Check if the username already exists
    const checkQuery = `SELECT * FROM schools WHERE username = ?`;
    db.get(checkQuery, [username], (err, row) => {
        if (err) {
            return console.error(err.message);
        }

        if (row) {
            res.send('<h1>Username already exists. Please choose another one.</h1>');
        } else {
            const insertQuery = `INSERT INTO schools (school_name, username, password, email, role) 
                                 VALUES (?, ?, ?, ?, 'admin')`;

            db.run(insertQuery, [schoolName, username, password, email], function(err) {
                if (err) {
                    return console.error(err.message);
                }
                res.send(`<h1>School ${schoolName} registered successfully!</h1>`);
            });
        }
    });
});

// Route for handling user login
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Query the database to check if the user exists and the password matches
    const query = `SELECT * FROM schools WHERE username = ? AND password = ?`;
    db.get(query, [username, password], (err, row) => {
        if (err) {
            return console.error(err.message);
        }

        if (row) {
            // If a matching user is found, display a success message
            res.send(`<h1>Welcome, ${row.school_name}!</h1>`);
        } else {
            // If no matching user is found, display an error message
            res.send('<h1>Login failed. Invalid username or password.</h1>');
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
