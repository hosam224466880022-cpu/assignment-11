import Message from "../models/message.model.js";
import cloudinary from "../utils/cloudinary.js";
import fs from "fs";
import { messageSchema } from "../validators/message.validator.js";

export const sendMessage = async (req, res, next) => {

  try {

    const { error } = messageSchema.validate(req.body);

    if (error) {

      if (req.file) fs.unlinkSync(req.file.path);

      return res.status(400).json({

        message: error.details[0].message

      });

    }

    let imageUrl = null;
    let public_id = null;

    if (req.file) {

      const result = await cloudinary.uploader.upload(req.file.path);

      imageUrl = result.secure_url;
      public_id = result.public_id;

      fs.unlinkSync(req.file.path);

    }

    const message = await Message.create({

      text: req.body.text,
      image: imageUrl,
      public_id

    });

    res.json({

      message: "Message sent successfully",
      data: message

    });

  } catch (error) {

    if (req.file) fs.unlinkSync(req.file.path);

    next(error);

  }

};

export const getMessages = async (req, res) => {

  const messages = await Message.find().sort({ createdAt: -1 });

  res.json(messages);

};

export const deleteMessage = async (req, res) => {

  const message = await Message.findById(req.params.id);

  if (!message) {

    return res.status(404).json({

      message: "Message not found"

    });

  }

  if (message.public_id) {

    await cloudinary.uploader.destroy(message.public_id);

  }

  await message.deleteOne();

  res.json({

    message: "Message deleted"

  });

};