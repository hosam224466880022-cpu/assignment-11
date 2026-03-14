import express from "express";
import {
  sendMessage,
  getMessages,
  deleteMessage
} from "../controllers/message.controller.js";

import { upload } from "../middlewares/upload.js";

const router = express.Router();

router.post("/send", upload.single("image"), sendMessage);

router.get("/", getMessages);

router.delete("/:id", deleteMessage);

export default router;