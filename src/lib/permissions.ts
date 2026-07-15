import type { User } from "better-auth";
import { config } from "~/config";
import { UserRole } from "~/consts/user_roles";
import { getRathenaUser, getUserRole } from "./athena";
import * as nordic from "~/providers/nordic/db";
import { eq, like } from "drizzle-orm";
import consola from "consola";

export const canSeePage = async (pathname: string, user: User | null) => {
  const applicationBasePath = config.get<string>("Application.BasePath");
  const [, firstpath] = pathname.replace(applicationBasePath, "/").split("/");
  const [page] = await nordic.db
    .select()
    .from(nordic.page)
    .where(like(nordic.page.path, firstpath + "%"));

  // All pages are visible unless defined otherwise
  if (!page) {
    return true;
  }
  const { minimunVisibility } = page;

  const minimunRole = UserRole[minimunVisibility] ?? UserRole.Anyone;

  if (minimunRole <= UserRole.Anonymous) {
    return true;
  } else if (!user) {
    return false;
  }
  const rathenaUser = await getRathenaUser(user);
  const role = getUserRole(rathenaUser.groupId); // TODO: Modify schema so user permission is de-linked from ro role

  return role >= minimunRole;
};

export async function isAllowedTo(name: string, user: User | null) {
  if (!user) {
    return false;
  }

  const [permission] = await nordic.db
    .select()
    .from(nordic.permission)
    .where(eq(nordic.permission.name, name));

  if (!permission) {
    consola.error(`Permission "${permission}" does not exist`);
    return false;
  }
  const minimunRole = UserRole[permission.role];

  if (!minimunRole) {
    consola.error(`Unmmaped permission "${permission}"`);
    return false;
  }

  const rathenaUser = await getRathenaUser(user);
  const role = getUserRole(rathenaUser.groupId);

  return role >= minimunRole;
}
