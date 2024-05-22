import { TProduct } from "./products.inteface";
import { Product } from "./products.model";

const createProductIntoMongoDB = async (product: TProduct) => {
  const result = await Product.create(product);

  console.log(result);
  return result;
};

export const ProductServices = {
  createProductIntoMongoDB,
};
