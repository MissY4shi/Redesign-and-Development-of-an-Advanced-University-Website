const mongoose = require('mongoose');

const admissionSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    courseApplied: { type: String, required: true },
    previousEducation: { type: String, required: true },
    status: { 
        type: String, 
        enum: ['Pending', 'Reviewed', 'Accepted', 'Rejected'], 
        default: 'Pending' 
    },
    appliedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Admission', admissionSchema);