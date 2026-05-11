import { createFileRoute } from '@tanstack/react-router';
import { products, sleep } from '#/routes.utils.ts';

export const Route = createFileRoute('/product/$id')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const { id } = params;

    // Wait for 1 second (500 milliseconds)
    await sleep(500);
    // const product = await getProductById(id)

    return { product: products.filter((product) => product.id === id)[0] };
  },
});

function RouteComponent() {
  // const { id } = Route.useParams();
  // return <div>Product ID: {id}</div>;

  const { product } = Route.useLoaderData();
  return (
    <div>
      <h1 className='text-2xl font-bold'>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}
