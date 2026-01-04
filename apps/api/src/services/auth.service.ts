import bcrypt from "bcrypt";
import { userRepo } from "../repositories/user.repo";

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
