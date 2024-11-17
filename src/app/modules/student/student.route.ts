import express from 'express'; // Default import for express
import { studentController } from './student.controllers';

const router = express.Router(); // Use express.Router() directly

// Define routes
router.post('/create-student', studentController.createStudent);

export const studentRoutes = router;
