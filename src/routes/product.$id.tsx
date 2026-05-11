import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/product/$id')({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();
  return <div>Product ID: {id}</div>;
}
