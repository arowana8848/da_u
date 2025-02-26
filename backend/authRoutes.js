const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pool = require("./db");
require("dotenv").config();

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "your_default_secret";

// Signup Route
router.post("/signup", async (req, res) => {
    console.log("Received signup data:", req.body);  // Debugging log

    const { fullName, email, password } = req.body;  // Correct key: fullName

    if (!fullName || !email || !password) {
        return res.status(400).json({ success: false, msg: "All fields are required" });
    }

    try {
        // Check if user exists
        const userExists = await pool.query("SELECT id FROM users WHERE email = $1", [email]);
        if (userExists.rows.length > 0) {
            return res.status(400).json({ success: false, msg: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user
        const newUser = await pool.query(
            "INSERT INTO users (full_name, email, password) VALUES ($1, $2, $3) RETURNING id, full_name, email",
            [fullName, email, hashedPassword]  // Use fullName (not full_name)
        );

        // Generate JWT
        const token = jwt.sign({ userId: newUser.rows[0].id }, JWT_SECRET, { expiresIn: "1h" });

        res.status(201).json({
            success: true,
            msg: "User registered successfully!",
            user: newUser.rows[0],
            token
        });

    } catch (err) {
        console.error("Signup error:", err.message);
        res.status(500).json({ success: false, msg: "Server error" });
    }
});

// Login Route
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const userQuery = await pool.query("SELECT id, full_name, email, password FROM users WHERE email = $1", [email]);
        if (userQuery.rows.length === 0) {
            console.log("❌ Email not found:", email);
            return res.status(400).json({ success: false, msg: "Invalid credentials" });
        }

        const user = userQuery.rows[0];
        console.log("✅ User found:", user);

        const validPassword = await bcrypt.compare(password, user.password);
        console.log("🔑 Password Match:", validPassword);

        if (!validPassword) {
            return res.status(400).json({ success: false, msg: "Invalid credentials" });
        }

        const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "1h" });

        delete user.password; // Remove password from response

        res.json({ success: true, msg: "Login successful", user, token });

    } catch (err) {
        console.error("Login error:", err.message);
        res.status(500).json({ success: false, msg: "Server error" });
    }
});

module.exports = router;
