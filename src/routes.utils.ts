export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const products = [
  { id: '1', name: 'Football', description: ' description' },
  { id: '2', name: 'Hat', description: 'Hat description' },
  { id: '3', name: 'Cool Shoes', description: 'Cool Shoes description' },
];
