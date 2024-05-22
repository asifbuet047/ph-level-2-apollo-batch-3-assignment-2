import zod from "zod";

const VSProduct = zod.object({
  name: zod.string().trim().min(2, { message: "Name is required" }),
  description: zod
    .string()
    .trim()
    .min(5, { message: "Description is required" }),
  price: zod.number().positive({ message: "Product price cant be negetive" }),
  category: zod.string().trim().min(1, { message: "Category is required" }),
  tags: zod.string().array().nonempty({ message: "Tags cant be empty" }),
  variants: zod
    .object({
      type: zod.string().trim(),
      value: zod.string().trim(),
    })
    .array()
    .nonempty({ message: "Variant cant be empty" }),
  inventory: zod.object({
    quantity: zod
      .number()
      .positive({ message: "Quantity cant be negetive number or zero" }),
    inStock: zod.boolean({ message: "Only true or false" }),
  }),
});

export default VSProduct;
