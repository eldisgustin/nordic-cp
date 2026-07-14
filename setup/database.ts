import consola from "consola";
import { db } from "~/db/nordic";
import * as schema from "~/db/nordic/schema";

consola.info("Creating default pages");

await db
  .insert(schema.page)
  .values([
    {
      id: 1,
      location: "navbar",
      icon: "mdi:home",
      order: 1,
      path: "/",
      title: "Home",
      body: "This is the download page",
      minimunVisibility: "Anyone",
      lastModifiedBy: null,
    },
    {
      id: 2,
      location: "navbar",
      icon: "mdi:info",
      order: 2,
      path: "/info",
      title: "Info",
      body: "This is the info page",
      minimunVisibility: "Anyone",
      lastModifiedBy: null,
    },
    {
      id: 3,
      location: "navbar",
      icon: "mdi:ruler",
      order: 3,
      path: "/rules",
      title: "Rules",
      body: "This is the rules page",
      minimunVisibility: "Anyone",
      lastModifiedBy: null,
    },
  ])
  .catch(() => {
    // TODO: Ignore duplicated tables, throw everything else
  });

consola.info("Creating default permissions");

await db
  .insert(schema.permission)
  .values([
    {
      role: "Admin",
      name: "page:list",
    },
    {
      role: "Admin",
      name: "page:edit",
    },
    {
      role: "Admin",
      name: "page:create",
    },
    {
      role: "Admin",
      name: "page:delete",
    },
    {
      role: "Admin",
      name: "account:list",
    },
    {
      role: "Admin",
      name: "account:view",
    },
    {
      role: "Admin",
      name: "account:edit",
    },
    {
      role: "Admin",
      name: "account:ban-temporal",
    },
    {
      role: "Admin",
      name: "account:ban-permanent",
    },
    {
      role: "Admin",
      name: "character:view",
    },
    {
      role: "Admin",
      name: "character:reset-position",
    },
    {
      role: "Admin",
      name: "character:reset-appereance",
    },
  ])
  .catch(() => {
    // TODO: Ignore duplicated tables, throw everything else
  });

process.exit(0);
