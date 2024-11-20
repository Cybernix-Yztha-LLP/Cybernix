const express = require("express");
const db = require("../config/db");
const router = express.Router();

// Signup route
router.post("/signup", (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  const query =
    "INSERT INTO users (firstname, lastname, email, password) VALUES (?, ?, ?, ?)";
  db.query(query, [firstname, lastname, email, password], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: "User  created successfully!" });
  });
});

// Login route
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const query = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(query, [email, password], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length > 0) {
      res.status(200).json({ message: "Login successful!", user: results[0] });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  });
});

module.exports = router;
