import { drizzle } from "drizzle-orm/mysql2";
import { config } from "~/config";

export * as schema from "./schema";

export const db = drizzle({
  connection: {
    uri: config.get("Application.DatabaseURL") as string,
  },
});
