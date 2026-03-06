import express from "express";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.routes.js";
import messageRoutes from "./routes/message.routes.js";

const app = express();

app.use(express.json());
app.use("/uploads", express.static("uploads"));

connectDB();

app.use("/users", userRoutes);
app.use("/messages", messageRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});