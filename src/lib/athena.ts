// server-side code

import consola from "consola";
import { count, eq, gt } from "drizzle-orm";
import ms from "ms";
import net from "node:net";
import { config } from "~/config";
import * as athena from "~/providers/athena/db";
import { UserRole } from "~/consts/user_roles";
import type { User } from "better-auth";

export function isServerUp(server: "Login" | "Char" | "Map") {
  const logger = consola.withTag("athena.server_status");
  const key = `Athena.Servers.${server}`;

  return new Promise<boolean>((resolve) => {
    const { host, port } = config.get<{ host: string; port: number }>(key);
    const client = net.connect(port, host);

    logger.debug("Pinging", server, "server");

    client.on("connect", () => {
      logger.debug(server, "returned true");
      return resolve(true);
    });
    client.on("connectionAttemptTimeout", () => {
      logger.debug(server, "returned false");
      return resolve(false);
    });
  });
}

export async function playersOnline() {
  const [{ playersOnline }] = await athena.db
    .select({
      playersOnline: count(athena.char.charId),
    })
    .from(athena.char)
    .where(gt(athena.char.online, 0));

  return playersOnline;
}

export function getUserRole(groupId: number): UserRole {
  const levels = config.get<Record<number, UserRole>>("Athena.Levels");
  const level = levels[groupId];

  // @ts-expect-error: idk how to type this
  return UserRole[level] ?? UserRole.Anonymous;
}

export async function getRathenaUser(user: User) {
  const [athenaUser] = await athena.db
    .select()
    .from(athena.login)
    .where(eq(athena.login.email, user.email));

  return athenaUser;
}
