const express = require("express");
const db = require("../config/db");
const { OAuth2Client } = require("google-auth-library");
const router = express.Router();
const rateLimit = require("express-rate-limit");

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID); // Add your Google Client ID

// Set up rate limiter: maximum of 100 requests per 15 minutes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // max 100 requests per windowMs
});

// Apply rate limiter to all routes
router.use(limiter);

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

router.post("/google-login", async (req, res) => {
  const { idToken } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const email = payload.email;
    const given_name = payload.given_name;
    const family_name = payload.family_name;

    // Check if the user already exists
    const query = "SELECT * FROM users WHERE email = ?";
    db.query(query, [email], (err, results) => {
      if (err) {
        console.error("Database query error:", err);
        return res.status(500).json({ error: err.message });
      }

      if (results.length > 0) {
        // User exists, return success response
        return res
          .status(200)
          .json({ message: "Login successful!", user: results[0] });
      } else {
        // Insert user without a password
        const tempfackey = "tempfakekey";
        const insertQuery =
          "INSERT INTO users (firstname, lastname, email,password) VALUES (?, ?, ?, ?)";
        db.query(
          insertQuery,
          [given_name, family_name, email, tempfackey],
          (insertErr, insertResults) => {
            if (insertErr) {
              console.error("Database insert error:", insertErr);
              return res.status(500).json({ error: insertErr.message });
            }
            res.status(201).json({
              message: "User  created successfully!",
              user: { firstname: given_name, lastname: family_name, email },
            });
          }
        );
      }
    });
  } catch (error) {
    console.error("Error verifying ID token:", error);
    return res.status(401).json({ error: "Invalid ID token" });
  }
});

module.exports = router;
