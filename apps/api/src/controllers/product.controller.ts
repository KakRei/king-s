import { Request, Response } from "express";
import { productRepo } from "../repositories/product.repo";

export const getProducts = async (_: Request, res: Response) => {
  const products = await productRepo.findAll();
  res.json(products);
};

// for testing middleware
export const createProduct = (req: Request, res: Response) => {
  return res.status(201).json({
    message: "Product created (stub)",
    user: req.user, // proves middleware worked
  });
};
