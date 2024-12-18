import { Student } from './student.interface';
import { Request, Response } from "express";
import { studentServices } from "./student.servise";

const createStudent = async (req: Request, res: Response) => {
    try {
        const { student: studentData } = req.body;
        // will call service func send with data 
        const result = await studentServices.createStudentIntoDB(studentData)
        // user response 
        res.status(200).json({
            success: true,
            message: "Student create successfully",
            data: result,
        })
    }
    catch (err) {
        console.log(err);
    }

};

const getAllStudents = async (req: Request, res: Response) => {
    try {
        const result = await studentServices.getAllStudentsFromDB()
        res.status(200).json({
            success: true,
            message: "Student is created successfully",
            data: result
        })
    }
    catch (err) {
        console.log(err);
    }
}

const getAllSingleStudentData = async (req: Request, res: Response) => {
    try {

        const { studentId } = req.params;
        const result = await studentServices.getSingleStudentData(studentId)
        res.status(200).json({
            success: true,
            message: "Created a student successfully ",
            data: result
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            data: err
        })
    }
}

export const studentController = {
    createStudent, getAllStudents, getAllSingleStudentData
}