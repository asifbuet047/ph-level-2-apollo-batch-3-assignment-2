import express from "express";
import { OrderController } from "./orders.controller";

const orderRouter = express.Router();

orderRouter.post("/", OrderController.createOrder);

orderRouter.get("/", OrderController.retriveAllOrders);

export const OrderRouter = orderRouter;
