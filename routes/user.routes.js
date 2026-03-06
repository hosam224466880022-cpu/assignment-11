import express from "express";
import { register } from "../controllers/user.controller.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();

router.post("/register", upload.single("image"), register);

export default router;