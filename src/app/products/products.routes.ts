import express from "express";
import { ProductController } from "./products.controller";

const router = express.Router();

router.post("/", ProductController.createProduct);

router.get("/", ProductController.retriveAllProducts);

router.get("/:productId", ProductController.retriveSpecificProduct);

router.put("/:productId", ProductController.updateProductInformation);

export const ProductRouter = router;
