import { z } from "astro/zod";
import { defineAction } from "astro:actions";
import * as nordic from "~/db/nordic";

export const pages = {
  create: defineAction({
    accept: "form",
    input: z.object({
      path: z.string().min(3).max(100),
      title: z.string().min(3).max(100),
      body: z.string(),
    }),
    async handler(input, ctx) {
      const { user } = ctx.locals;
      console.log({ user });
      if (!user) return;
      // TODO: Add permission validation
      await nordic.db.insert(nordic.schema.page).values({
        body: input.body,
        path: input.path,
        title: input.title,
        lastModifiedBy: user.id,
      });
    },
  }),
};
