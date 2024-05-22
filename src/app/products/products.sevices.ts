import { TProduct } from "./products.inteface";
import { Products } from "./products.model";

const createProductIntoMongoDB = async (product: TProduct) => {
  const result = await Products.create(product);
  return result;
};

const retriveAllProductsFromMongoDB = async () => {
  const result = await Products.find();
  return result;
};

export const ProductServices = {
  createProductIntoMongoDB,
  retriveAllProductsFromMongoDB,
};
