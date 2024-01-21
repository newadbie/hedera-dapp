import { SignIn } from '@clerk/clerk-react';
import { FileRoute, redirect } from '@tanstack/react-router';

export const Route = new FileRoute('/sign-in').createRoute({
  component: SignInComponent,
  beforeLoad({ context }) {
    if (context.auth.isSignedIn) {
      throw redirect({ to: '/dashboard' });
    }
  },
});

function SignInComponent() {
  return <SignIn signUpUrl="/sign-up" path="sign-in" />;
}
