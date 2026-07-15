// @ts-check
import node from "@astrojs/node";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig, memoryCache } from "astro/config";
import { config } from "./src/config";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  base: config.get("Application.BasePath"),

  security: {
    allowedDomains: config.get("Security.AllowedDomains"),
  },

  output: "server",

  integrations: [
    icon({
      include: {
        mdi: ["*"],
      },
    }),
    react(),
  ],

  adapter: node({
    mode: "middleware",
  }),

  cache: {
    provider: memoryCache(),
  },

  routeRules: {
    "/api/auth/[...all]": { maxAge: 0 },
  },
});
