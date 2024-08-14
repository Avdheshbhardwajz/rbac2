import express from 'express';
import dotenv from 'dotenv';
import checkEnv from './utils/CheckEnv.js';

// Load environment variables

dotenv.config({
    path: "./.env"
})
checkEnv();

import connectDB from './config/db.js';
import authRoutes from './Routes/authRoutes.js';
import taskRoutes from './Routes/taskRoutes.js';
import userRoutes from './Routes/userRoutes.js';


// Check environment variables

// Connect to MongoDB
connectDB().then(() => {
    const app = express();

    // Middleware for parsing JSON
    app.use(express.json());

    // Routes
    app.use('/api/auth', authRoutes);
    app.use('/api/tasks', taskRoutes);
    app.use('/api/users', userRoutes);

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

}).catch(
    (err) => {
        console.log("moogoDb connenation failed !! ::", err)
    })
