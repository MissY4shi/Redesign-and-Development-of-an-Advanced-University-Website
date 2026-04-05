const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
require('dotenv').config();

// --- ROUTE IMPORTS ---
const noticeRoutes = require('./routes/noticeRoutes');
const eventRoutes = require('./routes/eventRoutes');
const userRoutes = require('./routes/userRoutes');
const resultRoutes = require('./routes/resultRoutes');
const admissionRoutes = require('./routes/admissionRoutes');
const User = require('./models/User');

const app = express();

// --- MIDDLEWARE ---
app.use(helmet()); 
app.use(morgan('dev')); 
app.use(express.json());
app.use(cors());

// --- API HOME ROUTE ---
app.get('/', (req, res) => {
    res.json({
        university: "K.R. Mangalam University",
        project: "B.Tech Website Redesign API",
        status: "Online & Secure"
    });
});

// --- ROUTE CONNECTIONS ---
app.use('/api/users', userRoutes);
app.use('/api/notices', noticeRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/admissions', admissionRoutes);
app.use('/api/results', resultRoutes);

// --- AUTHENTICATION API ---
app.post('/api/login', async (req, res) => {
    const { userId, password, role } = req.body;
    try {
        const user = await User.findOne({ userId, role });
        if (!user) {
            return res.status(401).json({ success: false, message: "User not found" });
        }
        if (user.password === password) {
            return res.json({ success: true, message: `Welcome ${user.name}`, role: user.role });
        } else {
            return res.status(401).json({ success: false, message: "Invalid Password" });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

// --- DATABASE CONNECTION ---
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ Connected to KRMU Cloud Database'))
    .catch((err) => console.log('❌ DB Connection Error:', err));

// --- GLOBAL ERROR HANDLER ---
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: err.message
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));