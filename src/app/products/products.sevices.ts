import { TProduct } from "./products.inteface";
import { Products } from "./products.model";

const createProductIntoMongoDB = async (product: TProduct) => {
  const result = await Products.create(product);
  return result;
};

const retriveAllProductsFromMongoDB = async () => {
  const result = await Products.aggregate([{ $project: { __v: 0 } }]);
  return result;
};

const retriveSpecificProductFromMongoDB = async (productId: string) => {
  const result = await Products.findById(productId, { __v: 0 });
  return result;
};

const updateProductInformationIntoMongoDB = async (
  productId: string,
  productData: TProduct,
) => {
  const result = await Products.findOneAndUpdate(
    { _id: productId },
    productData,
    { returnDocument: "after" },
  );
  return result;
};

export const ProductServices = {
  createProductIntoMongoDB,
  retriveAllProductsFromMongoDB,
  retriveSpecificProductFromMongoDB,
  updateProductInformationIntoMongoDB,
};
