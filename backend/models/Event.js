const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    eventDate: { type: Date, required: true },
    location: { type: String, required: true, trim: true },
    datePosted: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Event', eventSchema);