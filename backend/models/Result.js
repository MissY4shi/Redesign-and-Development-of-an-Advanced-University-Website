const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    rollNo: { type: String, required: true, trim: true }, 
    studentName: { type: String, required: true },
    programName: { type: String, default: "B.Tech Computer Science & Engineering" },
    academicYear: { type: String, default: "2025-2026" },
    courseCode: { type: String, required: true, uppercase: true }, 
    courseName: { type: String, required: true },
    credits: { type: Number, required: true },
    grade: { type: String, required: true },
    semester: { type: String, default: "Semester 3" },
    datePosted: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Result', resultSchema);