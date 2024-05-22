import express from "express";
import { OrderController } from "./orders.controller";

const orderRouter = express.Router();

orderRouter.post("/", OrderController.createOrder);

export const OrderRouter = orderRouter;
