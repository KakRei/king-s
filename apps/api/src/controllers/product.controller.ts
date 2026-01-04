import { Request, Response } from "express";
import { productRepo } from "../repositories/product.repo";

export const getProducts = async (_: Request, res: Response) => {
  const products = await productRepo.findAll();
  res.json(products);
};
