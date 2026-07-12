import { defineMiddleware } from "astro:middleware";
import { auth } from "~/lib/auth";

export const onRequest = defineMiddleware(async (context, next) => {
  const isAuthed = await auth.api
    .getSession({
      headers: context.request.headers,
    })
    .catch(() => {
      return null;
    });

  context.locals.isAuthenticated = Boolean(isAuthed);
  context.locals.user = isAuthed?.user ?? null;
  context.locals.session = isAuthed?.session ?? null;

  return next();
});
