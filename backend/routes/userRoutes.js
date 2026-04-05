const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Ensure this path to your User model is correct

// Route to manually add users (like via Postman)
router.post('/', async (req, res) => {
    try {
        const { userId, password, role, name } = req.body;
        
        // Check if user already exists
        const existingUser = await User.findOne({ userId });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }

        const newUser = new User({ userId, password, role, name });
        await newUser.save();
        
        res.status(201).json({ success: true, message: "User created successfully!" });
    } catch (err) {
        res.status(500).json({ success: false, message: "Internal Server Error", error: err.message });
    }
});

module.exports = router;