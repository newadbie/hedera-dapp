import { FileRoute, redirect } from '@tanstack/react-router';

export const Route = new FileRoute('/login').createRoute({
  component: Login,
  beforeLoad({ context }) {
    if (context.auth.isSignedIn) {
      throw redirect({ to: '/dashboard' });
    }
  },
});

function Login() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  );
}
