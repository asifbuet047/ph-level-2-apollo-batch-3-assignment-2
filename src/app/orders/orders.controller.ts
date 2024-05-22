import { Request, Response } from "express";
import { OrderServices } from "./orders.services";
import { ProductServices } from "../products/products.sevices";

const createOrder = async (request: Request, response: Response) => {
  try {
    const { data: orderData } = request.body;
    const productDetails =
      await ProductServices.retriveSpecificProductFromMongoDB(
        orderData.productId,
      );

    if (productDetails) {
      const availableQuantity: number = productDetails.inventory.quantity;
      const orderedQuantity: number = orderData.quantity;
      const remainingQuantity: number = availableQuantity - orderedQuantity;

      if (availableQuantity >= orderedQuantity) {
        const result = await OrderServices.createOrderIntoMongoDB(orderData);
        response.status(200).json({
          success: true,
          message: "Order created successfully",
          data: result,
        });

        productDetails.inventory.quantity = remainingQuantity;
        if (remainingQuantity == 0) {
          productDetails.inventory.inStock = false;
        }

        await ProductServices.updateProductInformationIntoMongoDB(
          orderData.productId,
          productDetails,
        );
      } else {
        response.status(200).json({
          success: false,
          message: "Insufficient quantity available in inventory",
        });
      }
    } else {
      response.status(500).json({
        success: false,
        message: productDetails,
      });
    }
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error,
    });
  }
};

const retriveAllOrdersOrUserOrders = async (
  request: Request,
  response: Response,
) => {
  try {
    if (request.query.email) {
      const userEmail = request.query.email;
      const result = await OrderServices.retriveUserOrdersFromMongoDB(
        userEmail as string,
      );
      response.status(200).json({
        success: true,
        message: "Orders fetched successfully for user email",
        data: result,
      });
    } else {
      const result = await OrderServices.retriveAllOrdersFromMongoDB();
      response.status(200).json({
        success: true,
        message: "Orders fetched successfully",
        data: result,
      });
    }
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error,
    });
  }
};

export const OrderController = {
  createOrder,
  retriveAllOrdersOrUserOrders,
};
