import { Router } from "express";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

router.get("/user", authenticate, (req, res) => {
  return res.json({
    message: "Authenticated user",
    user: req.user,
  });
});

export default router;
