import { Schema, model } from "mongoose";
import {
  TProduct,
  TProductInventory,
  TProductVariant,
} from "./products.inteface";

const SProductVariant = new Schema<TProductVariant>(
  {
    type: String,
    value: String,
  },
  {
    _id: false,
  },
);

const SProductInventory = new Schema<TProductInventory>(
  {
    quantity: Number,
    inStock: Boolean,
  },
  {
    _id: false,
  },
);

const SProduct = new Schema<TProduct>({
  name: {
    type: String,
    required: true,
    unique: true,
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
    type: [SProductVariant],
    required: true,
  },
  inventory: {
    type: SProductInventory,
    required: true,
  },
});

export const Products = model<TProduct>("product", SProduct);
