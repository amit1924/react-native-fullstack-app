import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connection established");
  } catch (err) {
    console.log("Error in database connection", err.message);
  }
};

export default dbConnect;
