import { Student, UserName, Guardian, LocalGuardian } from './student/student.interface';
import { Schema, model, connect } from 'mongoose';


const UserSchema = new Schema<UserName>(
    {
        firstName: { type: String, required: true },
        middleName: { type: String, required: true },
        lastName: { type: String, required: true },

    },
)

const Guardian = new Schema<Guardian>(
    {
        fatherName: { type: String, required: true },
        fatherOccupation: { type: String, required: true },
        fatherContactNo: { type: String, required: true },
        motherName: { type: String, required: true },
        motherContactNo: { type: String, required: true }
    }
);

const LocalGuardian = new Schema<LocalGuardian>(
    {
        name: { type: String, required: true },
        occupation: { type: String, required: true },
        contactNo: { type: String, required: true },
        address: { type: String, required: true },

    }
)


const studentSchema = new Schema<Student>({
    id: { type: String },
    name: UserSchema,
    gender: ['male', 'female'],
    dateOfBirth: { type: String, required: true },
    email: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    bloodGroup: ['A+', 'A-', 'O+', 'O-'],
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: Guardian,
    localGuardian: LocalGuardian,
    profileImg: { type: String },
    isActive: ['active', "inActive"]
})


export const student = model<Student>("Student", studentSchema)