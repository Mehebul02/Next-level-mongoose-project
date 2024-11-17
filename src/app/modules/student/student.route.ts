import { express } from 'express';
import { studentController } from './student.controllers';

const router = express.Router()
// will for controller  fun
router.post('/create-student', studentController.createStudent)