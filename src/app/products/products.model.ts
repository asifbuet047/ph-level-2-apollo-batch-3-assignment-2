import { Schema, model } from "mongoose";
import {
  TProduct,
  TProductInventory,
  TProductVariant,
} from "./products.inteface";

const productVariantSchema = new Schema<TProductVariant>({
  type: String,
  value: String,
});

const productInventorySchema = new Schema<TProductInventory>({
  quantity: Number,
  inStock: Boolean,
});

const productSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  variants: {
    type: [productVariantSchema],
    required: true,
  },
  inventory: {
    type: productInventorySchema,
    required: true,
  },
});


export const Product = model<TProduct>('product',productSchema);
