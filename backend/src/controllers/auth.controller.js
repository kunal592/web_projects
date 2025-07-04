import User from "../models/user.model.js";
import chalk from "chalk";
import bcrypt from "bcryptjs";
import { generateToken } from "../lib/utils.js";

const errorLog = chalk.bold.red;

export const signup = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    // Check password length
    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10); // ✅ Correct method name: genSalt, not gensalt
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    await newUser.save(); // ✅ Save the user to the database

    // Generate JWT token and send response
    generateToken(newUser._id, res);

    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      email: newUser.email,
      profilePics: newUser.profilePics,
    });

  } catch (err) {
    console.log(errorLog("Error in signup controller:", err.message));
    res.status(500).json({ message: "Internal server error" });
  }
};














export const login = (req, res) => {
  res.send("Log_in route");
};

export const logout = (req, res) => {
  res.send("Log_out route");
};
