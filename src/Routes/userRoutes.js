import express from 'express';
// Import necessary controllers here
import { protect, authorize } from '../Middlewares/authMiddleware.js';

const router = express.Router();

// Define routes here

export default router;
