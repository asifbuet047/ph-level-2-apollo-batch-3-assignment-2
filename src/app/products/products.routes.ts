import express from "express";
import { ProductController } from "./products.controller";

const productRouter = express.Router();

productRouter.post("/", ProductController.createProduct);

productRouter.get("/", ProductController.retriveAllProductsOrSearchProduct);

productRouter.get("/:productId", ProductController.retriveSpecificProduct);

productRouter.put("/:productId", ProductController.updateProductInformation);

productRouter.delete("/:productId", ProductController.deleteProduct);

export const ProductRouter = productRouter;
