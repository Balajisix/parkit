const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const slotRoutes = require('./routes/slotRoutes');
const accountRoutes = require('./routes/accountRoutes');
// const paymentRoutes = require('./routes/paymentRoutes');

const { freePendingSlots, freeCompletedSlots } = require('./controllers/accountController'); // Import the functions

dotenv.config();
connectDB();

const app = express();
app.use(
    cors({
      origin: "https://parkit-park.vercel.app",
      methods: ["GET", "POST", "DELETE", "PUT"],
      allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "Pragma",
      ],
      credentials: true,
    })
  );
app.use(bodyParser.json());

// Test Route
app.get("/", (req, res) => {
  res.json({ message: "Backend is working on Vercel!" });
});

// Routes
app.use('/api/users', userRoutes);
app.use('/api/admins', adminRoutes);
app.use('/api/slots', slotRoutes);
app.use('/api/accounts', accountRoutes);
// app.use('/api/payments', paymentRoutes);

// Schedule the cron jobs when the server starts
freePendingSlots();
freeCompletedSlots();

// Error handling for invalid routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found.' });
});

// Export the app for Vercel (DO NOT call app.listen)
module.exports = app;
