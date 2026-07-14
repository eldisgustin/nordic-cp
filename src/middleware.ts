import { defineMiddleware, sequence } from "astro:middleware";
import ms from "ms";
import * as athena from "~/db/athena";
import { getRathenaUser, getUserRole } from "~/lib/athena";
import { auth } from "~/lib/auth";
import { cache } from "~/lib/cache";

export const authentication = defineMiddleware(async (context, next) => {
  const isAuthed = await auth.api
    .getSession({
      headers: context.request.headers,
    })
    .catch(() => {
      return null;
    });

  context.locals.isAuthenticated = Boolean(isAuthed);

  const { user = null, session = null } = isAuthed ?? {};

  context.locals.user = user ?? null;
  context.locals.session = session ?? null;

  if (user) {
    const cacheKey = `rathena.user.${user.id}`;
    let athenaUser = cache.get<typeof athena.login.$inferSelect>(cacheKey);

    if (!athenaUser) {
      athenaUser = await getRathenaUser(user);

      cache.set(`rathena.user.${user.id}`, athenaUser, ms("15m"));
    }

    context.locals.level = getUserRole(athenaUser.groupId);
  }

  return next();
});

export const onRequest = sequence(authentication);
