import ReactDOM from 'react-dom/client';
import { RouterProvider, Router } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { ClerkProvider, useAuth } from '@clerk/clerk-react';
import { env } from 'env';

// Set up a Router instance
const router = new Router({
  routeTree,
  defaultPreload: 'intent',
  context: { auth: undefined! },
});

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('root')!;

function Provider() {
  return (
    <ClerkProvider publishableKey={env.VITE_CLERK_PUBLISHABLE_KEY}>
      <Consumer />
    </ClerkProvider>
  );
}

function Consumer() {
  const auth = useAuth();

  if (!auth.isLoaded) {
    return <div>Loading...</div>;
  }

  return <RouterProvider router={router} context={{ auth }} />;
}

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<Provider />);
}
