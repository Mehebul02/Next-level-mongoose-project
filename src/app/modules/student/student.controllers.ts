import { Request, Response } from "express";
import { studentServices } from "./student.servise";

const createStudent = async (req: Request, res: Response) => {

    try {
        const student = req.body

        // will call service func send with data 

        const result = await studentServices.createStudentIntoDB(student)
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

}

export const studentController = {
    createStudent
}