import { Student } from './student/student.interface';
import { Schema, model, connect } from 'mongoose';

const studentSchema = new Schema<Student>({
    id: { type: String },
    name: {
        firstName: { type: String, required: true },
        middleName: { type: String, required: true },
        lastName: { type: String, required: true },

    },
    gender: ['male', 'female'],
    dateOfBirth: { type: String, required: true },
    email: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    bloodGroup: ['A+', 'A-', 'O+', 'O-'],
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: {
        fatherName: { type: String, required: true },
        fatherOccupation: { type: String, required: true },
        fatherContactNo: { type: String, required: true },
        motherName: { type: String, required: true },
        motherContactNo: { type: String, required: true }
    },
    localGuardian: {
        name: { type: String, required: true },
        occupation: { type: String, required: true },
        contactNo: { type: String, required: true },
        address: { type: String, required: true },

    },
    profileImg: { type: String },
    isActive: ['active', "inActive"]
})