import express, { Application, Request, Response } from "express";
import cors from "cors";
import { studentRoutes } from "./app/modules/student/student.route";
const app: Application = express();

// parser

app.use(express.json());
app.use(cors());

// application route

app.use("/api/v1/students", studentRoutes)

app.get("/", (req: Request, res: Response) => {
  const a = 44;

  res.send(a);
});

export default app;
