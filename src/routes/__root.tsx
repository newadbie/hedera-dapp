import { Outlet, RootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import '../styles/global.css';

export const Route = new RootRoute({
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
