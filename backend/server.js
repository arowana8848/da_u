const express = require("express");
const cors = require("cors");
const pool = require("./db");
const authRoutes = require("./authRoutes");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("PostgreSQL Backend Connected!");
});

// Authentication Routes
app.use("/api/auth", authRoutes);

// Get All Users (For Testing)
app.get("/api/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, full_name, email, created_at FROM users");
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching users:", err.message);
    res.status(500).json({ msg: "Server error" });
  }
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("Unhandled Error:", err);
  res.status(500).json({ msg: "Something went wrong" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
