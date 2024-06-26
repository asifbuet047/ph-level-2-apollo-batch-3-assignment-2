import { Request, Response } from "express";
import { ProductServices } from "./products.sevices";
import VSProduct from "./products.validation";

const createProduct = async (request: Request, response: Response) => {
  try {
    const { data: productData } = request.body;

    const validatedData = VSProduct.parse(productData);

    const result =
      await ProductServices.createProductIntoMongoDB(validatedData);
    response.status(200).json({
      success: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (error: any) {
    if (error.errorResponse) {
      response.status(500).json({
        success: false,
        message: `${error.keyValue.name} is already in inventory`,
      });
    } else {
      response.status(500).json({
        success: false,
        message: error,
      });
    }
  }
};

const retriveAllProductsOrSearchProduct = async (
  request: Request,
  response: Response,
) => {
  try {
    if (request.query.searchTerm) {
      const term = request.query.searchTerm;

      const result = await ProductServices.searchProductIntoMongoDB(
        term as string,
      );
      response.status(200).json({
        success: true,
        message: `Product matching search term ${term} fetched successfully`,
        data: result.length > 0 ? result : "No product found",
      });
    } else {
      const result = await ProductServices.retriveAllProductsFromMongoDB();
      response.status(200).json({
        success: true,
        message: "Products fetched successfully",
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

const retriveSpecificProduct = async (request: Request, response: Response) => {
  try {
    const { productId } = request.params;

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

const updateProductInformation = async (
  request: Request,
  response: Response,
) => {
  try {
    const { productId } = request.params;

    const { data: productUpdatedData } = request.body;

    const validatedData = VSProduct.parse(productUpdatedData);

    const result = await ProductServices.updateProductInformationIntoMongoDB(
      productId,
      validatedData,
    );

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

const deleteProduct = async (request: Request, response: Response) => {
  try {
    const { productId } = request.params;

    await ProductServices.delectProductFromMongoDB(productId);

    response.status(200).json({
      success: true,
      message: "Product deleted successfully",
      data: null,
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
  retriveAllProductsOrSearchProduct,
  retriveSpecificProduct,
  updateProductInformation,
  deleteProduct,
};
