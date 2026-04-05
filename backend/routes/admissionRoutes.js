const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define a quick schema for admissions
const admissionSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    course: String,
    dateApplied: { type: Date, default: Date.now }
});

const Admission = mongoose.model('Admission', admissionSchema);

// POST: Guest submits application
router.post('/', async (req, res) => {
    try {
        const newApp = new Admission(req.body);
        await newApp.save();
        res.status(201).json({ success: true, message: "Application Submitted!" });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
});

module.exports = router;