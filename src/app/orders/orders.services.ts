import { TOrder } from "./orders.interface";
import { Orders } from "./orders.model";

const createOrderIntoMongoDB = async (order: TOrder) => {
  const result = await Orders.create(order);
  return result;
};

const retriveAllOrdersFromMongoDB = async () => {
  const result = await Orders.aggregate([{ $project: { __v: 0 } }]);
  return result;
};

const retriveUserOrdersFromMongoDB = async (userEmail: string) => {
  const result = await Orders.aggregate([
    {
      $match: { email: userEmail },
    },
    {
      $project: { __v: 0 },
    },
  ]);
  return result;
};

export const OrderServices = {
  createOrderIntoMongoDB,
  retriveAllOrdersFromMongoDB,
  retriveUserOrdersFromMongoDB,
};
