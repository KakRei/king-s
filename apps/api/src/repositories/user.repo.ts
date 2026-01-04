import { prisma } from "../prisma/client";

export const userRepo = {
  findByEmail: (email: string) => prisma.user.findUnique({ where: { email } }),

  create: (data: { email: string; password: string }) =>
    prisma.user.create({ data }),
};
