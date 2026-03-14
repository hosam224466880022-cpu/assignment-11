import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./src/config/db.js";
import messageRoutes from "./src/routes/message.routes.js";
import errorHandler from "./src/middlewares/errorHandler.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/messages", messageRoutes);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});