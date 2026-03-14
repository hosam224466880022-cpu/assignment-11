import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({

  text: {
    type: String,
    required: true,
    minlength: 2
  },

  image: {
    type: String
  },

  public_id: {
    type: String
  }

}, { timestamps: true });

export default mongoose.model("Message", messageSchema);