const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// GET: Fetch all upcoming events, sorted by date
router.get('/', async (req, res) => {
    try {
        const events = await Event.find().sort({ eventDate: 1 }); // 1 for ascending (closest date first)
        res.json(events);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST: Create a new event
router.post('/', async (req, res) => {
    try {
        const newEvent = new Event(req.body);
        const savedEvent = await newEvent.save();
        res.status(201).json(savedEvent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE: Remove an event
router.delete('/:id', async (req, res) => {
    try {
        await Event.findByIdAndDelete(req.params.id);
        res.json({ message: "Event deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;