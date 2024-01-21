import { SignUp } from '@clerk/clerk-react';
import { FileRoute, redirect } from '@tanstack/react-router';

export const Route = new FileRoute('/sign-in').createRoute({
  component: Login,
  beforeLoad({ context }) {
    if (context.auth.isSignedIn) {
      throw redirect({ to: '/dashboard' });
    }
  },
});

function Login() {
  return <SignUp />;
}
