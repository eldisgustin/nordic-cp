import express from "express";
import config from "config";
import { handler as ssrHandler } from "./dist/server/entry.mjs";
import consola from "consola";

const app = express();
// Change this based on your astro.config.mjs, `base` option.
// They should match. The default value is "/".
const base = config.get("Application.BasePath");
const port = config.get("Application.Port");

consola.info({ base, port });

app.use(base, express.static("dist/client/"));
app.use(ssrHandler);

app.listen(port);
