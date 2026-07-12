// @ts-check
import node from "@astrojs/node";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

import path from "node:path";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
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
    mode: "standalone",
  }),
});
