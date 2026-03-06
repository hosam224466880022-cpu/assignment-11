import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  message: String,
  receiverId: {
    type: mongoose.Types.ObjectId,
    ref: "User"
  }
});

export default mongoose.model("Message", messageSchema);