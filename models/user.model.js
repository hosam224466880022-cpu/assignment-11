import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  image: String
});

export default mongoose.model("User", userSchema);