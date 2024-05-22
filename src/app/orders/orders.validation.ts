import zod from "zod";

const VSOrder = zod.object({
  email: zod.string().trim().email(),
  productId: zod.string().trim(),
  price: zod.number().positive(),
  quantity: zod.number().nonnegative(),
});

export default VSOrder;
