import { FileRoute, redirect } from '@tanstack/react-router';

export const Route = new FileRoute('/').createRoute({
  component: Home,
  beforeLoad: ({ context }) => {
    throw redirect({
      to: context.auth.isSignedIn ? '/dashboard' : '/sign-in',
    });
  },
});

function Home() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  );
}
