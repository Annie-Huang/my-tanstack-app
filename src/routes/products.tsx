import { createFileRoute, Link } from '@tanstack/react-router';

// This file got automatically generated if you create a new file under routes and the server is running
export const Route = createFileRoute('/products')({
  component: RouteComponent,
});

const productList = [
  { id: '1', name: 'Football' },
  { id: '2', name: 'Hat' },
  { id: '3', name: 'Cool Shoes' },
];

function RouteComponent() {
  return (
    <div>
      <h1>Products:</h1>

      <ul>
        {productList.map((product) => (
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
