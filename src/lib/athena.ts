import consola from "consola";
import { count, gt } from "drizzle-orm";
import ms from "ms";
import net from "node:net";
import { config } from "~/config";
import * as athena from "~/db/athena";
import { cache } from "~/lib/cache";

const serverStatusCacheTTL = ms(config.get("Application.ServerStatusCacheTTL"));

export function isServerUp(server: "Login" | "Char" | "Map") {
  const logger = consola.withTag("athena.server_status");
  const key = `Athena.Servers.${server}`;

  return new Promise<boolean>((resolve) => {
    const cached = cache.get<boolean>(key);

    if (cached !== undefined) {
      logger.debug("cache found for", server, "with a value of", cached);
      return resolve(cached);
    }

    const { host, port } = config.get<{ host: string; port: number }>(key);
    const client = net.connect(port, host);

    logger.debug("Pinging", server, "server");

    client.on("connect", () => {
      cache.set(key, true);
      logger.debug(server, "returned true");
      return resolve(true);
    });
    client.on("connectionAttemptTimeout", () => {
      cache.set(key, false, serverStatusCacheTTL);
      logger.debug(server, "returned false");
      return resolve(false);
    });
  });
}

export async function playersOnline() {
  const logger = consola.withTag("athena.players_online");
  const key = "Athena.Servers.PlayerCount";
  const cached = cache.get<number>(key);

  if (cached !== undefined) {
    logger.debug("cache found for", cached);
    return cached;
  }

  const [{ playersOnline }] = await athena.db
    .select({
      playersOnline: count(athena.char.charId),
    })
    .from(athena.char)
    .where(gt(athena.char.online, 0));

  cache.set(key, playersOnline, serverStatusCacheTTL);

  return playersOnline;
}
