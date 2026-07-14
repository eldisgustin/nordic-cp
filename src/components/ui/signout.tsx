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
    <button className="btn" onClick={handleLogout}>
      {children}
    </button>
  );
}
