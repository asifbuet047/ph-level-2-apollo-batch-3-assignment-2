import express from "express";
import { ProductController } from "./products.controller";

const router = express.Router();

router.post("/", ProductController.createProduct);

router.get("/", ProductController.retriveAllProductsOrSearchProduct);

router.get("/:productId", ProductController.retriveSpecificProduct);

router.put("/:productId", ProductController.updateProductInformation);

router.delete("/:productId", ProductController.deleteProduct);

export const ProductRouter = router;
