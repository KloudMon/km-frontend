'use client';
import { Button } from './ui/button';
import { Icons } from './icons';

export default function GitHubSignInButton() {

  return (
    <Button
      className="w-full"
      variant="outline"
      type="button"
      onClick={() =>
        console.log("TODO: Github sign in not implemented yet!")
      }
    >
      <Icons.gitHub className="mr-2 h-4 w-4" />
      Continue with Github
    </Button>
  );
}
