import { FileRoute, redirect } from '@tanstack/react-router';

export const Route = new FileRoute('/dashboard').createRoute({
  component: Dashboard,
  beforeLoad({ context }) {
    if (!context.auth.isSignedIn) {
      throw redirect({ to: '/login' });
    }
  },
});

function Dashboard() {
  return (
    <div>
      <h3>Welcome Home!</h3>
    </div>
  );
}
