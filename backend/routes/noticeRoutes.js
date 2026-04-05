const express = require('express');
const router = express.Router();
const Notice = require('../models/Notice');

// POST: Create a new notice with Duplicate Check
router.post('/', async (req, res) => {
    try {
        const notice = new Notice(req.body);
        const newNotice = await notice.save();
        res.status(201).json(newNotice);
    } catch (err) {
        // This catches the 'unique: true' error from your Notice model
        if (err.code === 11000) {
            return res.status(400).json({ message: "Error: A notice with this title already exists." });
        }
        res.status(400).json({ message: err.message });
    }
});

// GET: All notices (Sorted newest first)
router.get('/', async (req, res) => {
    try {
        const notices = await Notice.find().sort({ datePosted: -1 });
        res.json(notices);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// DELETE: Remove a notice by ID
router.delete('/:id', async (req, res) => {
    try {
        await Notice.findByIdAndDelete(req.params.id);
        res.json({ message: "Notice deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;