import { Request, Response } from "express";
import { ProductServices } from "./products.sevices";
import VSProduct from "./products.validation";

const createProduct = async (request: Request, response: Response) => {
  try {
    const { data: productData } = request.body;

    console.log({
      from: "product.comtroller.ts",
      message: productData,
    });

    const validatedData = VSProduct.parse(productData);

    const result =
      await ProductServices.createProductIntoMongoDB(validatedData);
    response.status(200).json({
      success: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error,
    });
  }
};

const retriveAllProducts = async (request: Request, response: Response) => {
  try {
    const result = await ProductServices.retriveAllProductsFromMongoDB();
    response.status(200).json({
      success: true,
      message: "Product fetched successfully",
      data: result,
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error,
    });
  }
};

const retriveSpecificProduct = async (request: Request, response: Response) => {
  try {
    const { productId } = request.params;
    console.log(productId);

    const result =
      await ProductServices.retriveSpecificProductFromMongoDB(productId);
    response.status(200).json({
      success: true,
      message: "Specific Product fetched successfully",
      data: result,
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error,
    });
  }
};

export const ProductController = {
  createProduct,
  retriveAllProducts,
  retriveSpecificProduct,
};
