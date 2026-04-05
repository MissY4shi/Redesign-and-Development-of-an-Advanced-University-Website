const express = require('express');
const router = express.Router();
const Result = require('../models/Result');

// Faculty uploads a grade
router.post('/', async (req, res) => {
    try {
        const newResult = new Result(req.body);
        await newResult.save();
        res.status(201).json({ message: "Success" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Student fetches their specific results via Roll No
router.get('/:rollNo', async (req, res) => {
    try {
        const results = await Result.find({ rollNo: req.params.rollNo }).sort({ datePosted: -1 });
        res.json(results);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;