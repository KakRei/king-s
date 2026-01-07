import { Request, Response } from "express";
import { loginUser, registerUser } from "../services/auth.service";

//--- Register Controller ---
export const register = async (req: Request, res: Response) => {
  try {
    const user = await registerUser(
      req.body.email,
      req.body.password,
      req.body.role
    );

    res.status(201).json(user);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

//--- Login Controller ---
export const login = async (req: Request, res: Response) => {
  try {
    const result = await loginUser(req.body.email, req.body.password);

    res.json(result);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};
