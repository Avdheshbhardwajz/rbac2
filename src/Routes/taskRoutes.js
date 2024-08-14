import express from 'express';
import {
    createTask,
    getAllTasks,
    getMyTasks,
    updateTask,
    deleteTask,
} from '../Controllers/taskController.js';
import { protect, authorize } from '../Middlewares/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, authorize('Member'), createTask).get(protect, authorize('Admin', 'Manager'), getAllTasks);
router.route('/mytasks').get(protect, authorize('Member'), getMyTasks);
router.route('/:id').put(protect, authorize('Member', 'Admin'), updateTask).delete(protect, authorize('Member', 'Admin'), deleteTask);

export default router;

