const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, '../../database.db');
const db = new Database(dbPath);

// Initialize database tables
function initializeDatabase() {
  try {
    db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT,
        email TEXT UNIQUE,
        school_name TEXT,
        representative TEXT,
        country TEXT,
        city TEXT,
        address TEXT,
        phone TEXT,
        webpage TEXT,
        staff_number INTEGER,
        profile_image TEXT,
        membership_status TEXT,
        membership_expiry DATE
      );

      CREATE TABLE IF NOT EXISTS admins (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT,
        email TEXT UNIQUE,
        name TEXT,
        profile_image TEXT
      );
    `);
    console.log('Database initialized successfully');
  } catch (err) {
    console.error('Database initialization error:', err);
    throw err;
  }
}

module.exports = { db, initializeDatabase };