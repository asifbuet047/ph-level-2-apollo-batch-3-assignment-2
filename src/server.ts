import mongoose from "mongoose";
import CONFIG from "./app/config";
import app from "./app";

async function main() {
  try {
    await mongoose.connect(CONFIG.MONGODB_URL);
    app.listen(CONFIG.PORT, () => {
      console.log(`ph-level-2-apollo-batch-3-assignment-2 server is running on port ${CONFIG.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
