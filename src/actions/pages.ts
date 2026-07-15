import { z } from "astro/zod";
import { defineAction } from "astro:actions";
import { PageLocation } from "~/consts/page_location";
import * as nordic from "~/db/nordic";

export const pages = {
  put: defineAction({
    accept: "form",
    input: z.object({
      id: z.number().optional(),
      title: z.string().min(3).max(100),
      path: z.string().min(1).max(100),
      location: z.enum(PageLocation),
      icon: z.string().min(4),
      body: z.string(),
    }),
    async handler(input, ctx) {
      const { user } = ctx.locals;

      if (!user) return;

      const page: typeof nordic.page.$inferInsert = {
        body: input.body,
        path: input.path,
        location: input.location,
        title: input.title,
        icon: input.icon,
        lastModifiedBy: user.id,
      };

      await nordic.db
        .insert(nordic.page)
        .values({ id: input.id, ...page })
        .onDuplicateKeyUpdate({
          set: page,
        });

      await ctx.cache.invalidate({ path: '/[path]' });
    },
  }),
};
