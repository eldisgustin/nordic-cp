import { drizzle } from "drizzle-orm/mysql2";
import { config } from "~/config";

export * from "./schema";

export const db = drizzle({
  connection: {
    uri: config.get("Athena.DatabaseURL") as string,
  },
});
