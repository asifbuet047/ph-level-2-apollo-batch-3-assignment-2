import "dotenv/config";

type TConfig = {
  PORT: string;
  MONGODB_URL: string;
};

const CONFIG: TConfig = {
  PORT: process.env.PORT as string,
  MONGODB_URL: process.env.MONGODB_URL as string,
};

export default CONFIG;
