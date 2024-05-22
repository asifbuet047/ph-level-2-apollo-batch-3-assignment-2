import express, { Application, Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import { ProductRouter } from "./app/products/products.routes";
import { OrderRouter } from "./app/orders/orders.routes";

//our express app
const app: Application = express();

//express app middlewares like cors, json parser
app.use(cors());
app.use(express.json());

//product router
app.use("/api/products", ProductRouter);

//order router
app.use("/api/orders", OrderRouter);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Connection successful",
  });
});

export default app;
