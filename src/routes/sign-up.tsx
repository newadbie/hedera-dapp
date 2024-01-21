import { SignUp } from '@clerk/clerk-react';
import { FileRoute, redirect } from '@tanstack/react-router';

export const Route = new FileRoute('/sign-up').createRoute({
  component: SignUpComponent,
  beforeLoad({ context }) {
    if (context.auth.isSignedIn) {
      throw redirect({ to: '/dashboard' });
    }
  },
});

function SignUpComponent() {
  return <SignUp signInUrl="/sign-in" />;
}
