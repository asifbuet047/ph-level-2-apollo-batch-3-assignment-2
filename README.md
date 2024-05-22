# How to run this backend application (ph-level-2-apollo-batch-3-assignment-2) locally

**Ans:** This backend project is **small ecommerce sites backend server**. Client can add product, update product,view all product in the inventory and order any product. By using **mongoose** an object oriented library for mongodb client can't upload any type of product. Product and ordr have unique schema type that enables backend server to deny client corrupted data types. The git repo of this server is given below.

[Small ecommerce sites backend](https://github.com/asifbuet047/ph-level-2-apollo-batch-3-assignment-2)

**Follow the following procedure to run this server in your machine**

- Follow the git repo link and clone it in your at desired folder
- After cloning open VS code at that folder
- open terminal and run this command **npm init** . This install all node_modules in your current directory
- Now install all dev dependencies in **package.json** file section
- Now run the command `npm run build`. This command transpile all js code into ts in corresponding folder and use nodejs to run the server
- Create .env file in root directory

```
PORT = YOUR_DESIRED_PORT_NUMBER
MONGODB_URL = YOUR_MONGODB_SERVER_LINK
```

- Now run this command `npm run start:dev`. In your terminal you can see the server is listening at your port in env config file
