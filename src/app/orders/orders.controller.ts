import { Request, Response } from "express";
import { OrderServices } from "./orders.services";

const createOrder = async (request: Request, response: Response) => {
  try {
    const { data: orderData } = request.body;
    const result = await OrderServices.createOrderIntoMongoDB(orderData);
    response.status(200).json({
      success: true,
      message: "Order created successfully",
      data: result,
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error,
    });
  }
};

export const OrderController = { createOrder };
