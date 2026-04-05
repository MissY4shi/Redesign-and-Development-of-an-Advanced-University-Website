const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: { 
        type: String, 
        required: true, 
        unique: true, // Prevents duplicate IDs
        trim: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    role: { 
        type: String, 
        enum: ['student', 'faculty'], 
        required: true 
    },
    name: { 
        type: String, 
        required: true 
    }
});

module.exports = mongoose.model('User', userSchema);