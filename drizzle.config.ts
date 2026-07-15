import { defineConfig } from "drizzle-kit";
import config from "config";

export default defineConfig({
  out: "./drizzle",
  dialect: "mysql",
  schema: "./src/providers/nordic/db/schema.ts",

  dbCredentials: {
    url: config.get("Application.DatabaseURL"),
  },

  migrations: {
    table: "__migrations__",
  },
});
