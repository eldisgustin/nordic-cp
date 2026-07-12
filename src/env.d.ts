declare namespace App {
  interface Locals {
    isAuthenticated: boolean;
    user: import("better-auth").User | null;
    session: import("better-auth").Session | null;
  }
}
