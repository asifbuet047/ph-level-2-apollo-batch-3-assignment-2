import zod from "zod";

const VSProduct = zod.object({
  name: zod.string().trim(),
  description: zod.string().trim(),
  price: zod
    .number()
    .nonnegative({ message: "Product price cant be negetive" }),
  category: zod.string().trim(),
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
      .nonnegative({ message: "Quantity cant be negetive number" }),
    inStock: zod.boolean({ message: "Only true or false" }),
  }),
});

export default VSProduct;
