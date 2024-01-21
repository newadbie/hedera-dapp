import { UserButton, useAuth } from '@clerk/clerk-react';
import { FileRoute, redirect } from '@tanstack/react-router';

export const Route = new FileRoute('/dashboard').createRoute({
  component: Dashboard,
  beforeLoad({ context }) {
    if (!context.auth.isSignedIn) {
      throw redirect({ to: '/sign-in' });
    }
  },
});

function Dashboard() {
  const auth = useAuth();
  return (
    <div>
      <UserButton afterSignOutUrl="/sign-in" />
      <h3>Welcome Home!</h3>
      <pre>{JSON.stringify(auth, null, 2)}</pre>
    </div>
  );
}
