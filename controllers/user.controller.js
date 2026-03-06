import User from "../models/user.model.js";
import fs from "fs";

export const register = async (req, res) => {
  try {

    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      image: req.file?.path
    });

    res.json({ message: "User created", user });

  } catch (error) {

    if (req.file) {
      fs.unlinkSync(req.file.path);
    }

    res.json({ message: "Error", error });
  }
};