import { createFileRoute, Link } from '@tanstack/react-router';
import { sleep } from '#/route.utils.ts';

const products = [
  { id: '1', name: 'Football' },
  { id: '2', name: 'Hat' },
  { id: '3', name: 'Cool Shoes' },
];

// This file got automatically generated if you create a new file under routes and the server is running
export const Route = createFileRoute('/products')({
  component: RouteComponent,
  loader: async () => {
    // Wait for 1 second (500 milliseconds)
    await sleep(500);

    return { products };
  },
});

function RouteComponent() {
  const { products } = Route.useLoaderData();

  return (
    <div>
      <h1>Products:</h1>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {/*<Link to={`/product/${product.id}`}>{product.name}</Link>*/}

            {/* The above is not type safe. This one is type safe */}
            <Link to={`/product/$id`} params={{ id: product.id }}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
