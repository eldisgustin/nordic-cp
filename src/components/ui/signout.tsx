import type { Languages } from "~/i18n/ui";
import { authClient } from "~/lib/auth/client";

type SignOutProps = {
  children: any;
};

export function SignOut({ children }: SignOutProps) {
  async function handleLogout() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.assign("/");
        },
      },
    });
  }

  return (
    <span className="flex gap-1 items-center" onClick={handleLogout}>
      {children}
    </span>
  );
}
