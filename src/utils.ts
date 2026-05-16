import { prisma } from './db';
import { createServerFn } from '@tanstack/react-start';

// This code will only run in the server regardless where it is be called.
export const getProducts = createServerFn().handler(async () => {
  const products = await prisma.product.findMany({
    orderBy: { name: 'asc' },
  });
  return products;
});

// export const getProducts = async () => {
//   return prisma.product.findMany({
//     orderBy: { name: 'asc' },
//   });
// };

export const getProductById = createServerFn().handler(async ({ data }) => {
  const { id } = data;
  return prisma.product.findUnique({
    where: { id },
  });
});

// export async function getProductById(id: string) {
//   return prisma.product.findUnique({
//     where: { id },
//   });
// }
