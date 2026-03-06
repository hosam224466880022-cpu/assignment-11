import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {

  const message = await Message.create({
    message: req.body.message,
    receiverId: req.body.receiverId
  });

  res.json({ message: "Message sent", message });
};