const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { db } = require('../config/database');
const upload = require('../config/multer');

const router = express.Router();

// User Login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = db.prepare('SELECT * FROM users WHERE username = ?').get(username);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    res.cookie('token', token, { httpOnly: true });
    res.json({
      success: true,
      user: {
        id: user.id,
        username: user.username,
        schoolName: user.school_name,
        membershipStatus: user.membership_status
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// User Registration
router.post('/register', (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ success: false, message: err.message });
    }

    try {
      const {
        username,
        password,
        email,
        schoolName,
        representative,
        country,
        city,
        address,
        phone,
        webpage,
        staffNumber
      } = req.body;

      const hashedPassword = await bcrypt.hash(password, 10);
      const profileImage = req.file ? `/uploads/${req.file.filename}` : null;

      const stmt = db.prepare(`
        INSERT INTO users (
          username, password, email, school_name, representative,
          country, city, address, phone, webpage, staff_number,
          profile_image, membership_status
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `);

      stmt.run(
        username, hashedPassword, email, schoolName, representative,
        country, city, address, phone, webpage, staffNumber,
        profileImage, 'pending'
      );

      res.json({ success: true, message: 'Registration successful' });
    } catch (error) {
      console.error('Registration error:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });
});

// Logout
router.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.json({ success: true, message: 'Logged out successfully' });
});

module.exports = router;