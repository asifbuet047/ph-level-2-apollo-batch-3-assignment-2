import express, { Application, Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

//our express app
const app: Application = express();

//express app middlewares like cors, json parser
app.use(cors());
app.use(express.json());


app.get("/", (req: Request, res: Response) => {
  console.log(req.params);
  res.json({
    success: true,
    message: "Connection successfu",
  });
});



export default app;
