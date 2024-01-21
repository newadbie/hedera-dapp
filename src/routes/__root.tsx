import { Outlet, rootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import '../styles/global.css';
import { useAuth } from '@clerk/clerk-react';

export const Route = rootRouteWithContext<{ auth: ReturnType<typeof useAuth> }>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div>
      <Outlet />
      {/* Start rendering router matches */}
      <TanStackRouterDevtools position="bottom-right" />
    </div>
  );
}
