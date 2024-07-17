import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import dbConnect from "./dbConnect.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Miidleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.status(200).send({
    success: true,
    message: "Node Server is running",
  });
});

// Database Connection
dbConnect();

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
