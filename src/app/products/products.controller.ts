import { Request, Response } from "express";
import { ProductServices } from "./products.sevices";

const createProduct = async (request: Request, response: Response) => {
  try {
    const { data: productData } = request.body;

    console.log(productData);

    const result = await ProductServices.createProductIntoMongoDB(productData);

    console.log(result);

    response.status(200).json({
      success: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: "Product creation unsuccessfully",
    });
  }
};

export const ProductController = {
  createProduct,
};
