import { Router } from "express";
import { createProduct } from "../controllers/product.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { requireRole } from "../middlewares/role.middleware";

const router = Router();

router.post("/products", authenticate, requireRole("ADMIN"), createProduct);

export default router;