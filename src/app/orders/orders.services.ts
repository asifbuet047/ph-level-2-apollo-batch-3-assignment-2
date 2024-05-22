import { TOrder } from "./orders.interface";
import { Orders } from "./orders.model";

const createOrderIntoMongoDB = async (order: TOrder) => {
  const result = await Orders.create(order);
  return result;
};

export const OrderServices = {
  createOrderIntoMongoDB,
};
