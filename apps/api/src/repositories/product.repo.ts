import { prisma } from "../prisma/client";

export const productRepo = {
  findAll: () => prisma.product.findMany(),

  findById: (id: string) => prisma.product.findUnique({ where: { id } }),

  create: (data: {
    name: string;
    price: number;
    stock: number;
    description: string;
  }) => prisma.product.create({ data }),
};
