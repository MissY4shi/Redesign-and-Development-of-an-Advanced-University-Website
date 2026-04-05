const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: [true, "Title is required"],
        unique: true, // Prevents duplicate notice titles
        trim: true,
        index: true 
    },
    content: { 
        type: String, 
        required: [true, "Content is required"],
        trim: true
    },
    datePosted: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('Notice', noticeSchema);