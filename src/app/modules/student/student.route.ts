import express from 'express'; // Default import for express
import { studentController } from './student.controllers';

const router = express.Router(); // Use express.Router() directly

// Define routes
router.post('/create-student', studentController.createStudent);

router.get('/', studentController.getAllStudents);

router.get('/:studentId', studentController.getAllSingleStudentData)

export const studentRoutes = router;
