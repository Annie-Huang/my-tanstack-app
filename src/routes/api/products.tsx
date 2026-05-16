import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/api/products')({
  server: {
    handlers: {
      GET: async () => {
        return Response.json({ ok: true });
      },
      POST: async ({ request }) => {
        const body = await request.json();
        // Call DB here...
        return new Response(JSON.stringify({ message: 'Product added' }));
      },
    },
  },
});
