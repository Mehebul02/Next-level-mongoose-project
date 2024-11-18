import { Student, UserName, Guardian, LocalGuardian } from './student/student.interface';
import { Schema, model } from 'mongoose';

const UserSchema = new Schema<UserName>(
    {
        firstName: {
            type: String, required: [true, 'First Name is required'], trim: true, validate: function (value) {
                console.log(value);
            }
        },
        middleName: { type: String, required: [true, 'Middle Name is required'] },
        lastName: { type: String, required: [true, 'Last Name is required'] },
    },
);

const GuardianSchema = new Schema<Guardian>(
    {
        fatherName: { type: String, required: [true, 'Father Name is required'] },
        fatherOccupation: { type: String, required: [true, 'Father Occupation is required'] },
        fatherContactNo: { type: String, required: [true, 'Father Contact No is required'] },
        motherName: { type: String, required: [true, 'Mother Name is required'] },
        motherContactNo: { type: String, required: [true, 'Mother Contact No is required'] }
    }
);

const LocalGuardianSchema = new Schema<LocalGuardian>(
    {
        name: { type: String, required: [true, 'Local Guardian Name is required'] },
        occupation: { type: String, required: [true, 'Local Guardian Occupation is required'] },
        contactNo: { type: String, required: [true, 'Local Guardian Contact No is required'] },
        address: { type: String, required: [true, 'Local Guardian Address is required'] },
    }
);

const studentSchema = new Schema<Student>({
    id: { type: String, required: [true, 'ID is required'], unique: true },
    name: {
        type: UserSchema,
        required: [true, 'Name is required'],
    },
    gender: {
        type: String,
        enum: {
            values: ['male', 'female', "other"],
            message: "{VALUE} is not valid for gender"
        },
        required: [true, 'Gender is required']
    },
    dateOfBirth: { type: String, required: [true, 'Date of Birth is required'] },
    email: { type: String, required: [true, 'Email is required'] },
    emergencyContactNo: { type: String, required: [true, 'Emergency Contact No is required'] },
    bloodGroup: {
        type: String,
        enum: ['A+', 'A-', 'O+', 'O-'],
        message: "{VALUE} is not a valid blood group"
    },
    presentAddress: { type: String, required: [true, 'Present Address is required'] },
    permanentAddress: { type: String, required: [true, 'Permanent Address is required'] },
    guardian: {
        type: GuardianSchema,
        required: [true, 'Guardian information is required']
    },
    localGuardian: {
        type: LocalGuardianSchema,
    },
    profileImg: { type: String },
    isActive: {
        type: String,
        enum: {
            values: ['active', "inActive"],
            message: "{VALUE} is not a valid status for isActive"
        },
        default: 'active'
    }
});

export const studentModel = model<Student>("Student", studentSchema);
