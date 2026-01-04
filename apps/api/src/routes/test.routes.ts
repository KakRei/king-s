import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const router = Router();
const prisma = new PrismaClient();

router.get("/db", async (_, res) => {
  const now = await prisma.$queryRaw`SELECT NOW()`;
  res.json({ now });
});

export default router;
