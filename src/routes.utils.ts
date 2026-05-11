export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const products = [
  { id: '1', name: 'Football' },
  { id: '2', name: 'Hat' },
  { id: '3', name: 'Cool Shoes' },
];
