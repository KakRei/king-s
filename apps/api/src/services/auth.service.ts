import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { env } from "../config/env";
import { userRepo } from "../repositories/user.repo";

//--- Register a new user ---
export const registerUser = async (email: string, password: string) => {
  // Check if user already exists
  const existingUser = await userRepo.findByEmail(email);

  if (existingUser) {
    throw new Error("User already exists");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  return userRepo.create({ email, password: hashedPassword });
};

//--- Login user ---
export const loginUser = async (email: string, password: string) => {
  const user = await userRepo.findByEmail(email);

  if (!user) {
    throw new Error("User does not exist");
  }

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    throw new Error("Invalid password");
  }

  const token = jwt.sign(
    { userId: user.id, email: user.email },
    env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  return {
    token,
    user: { id: user.id, email: user.email },
  };
};
