import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { config } from "~/config";
import * as nordic from "~/db/nordic";
import * as athena from "~/db/athena";
import * as schema from "~/db/nordic/schema";
import { sendMail } from "~/lib/email";
import { createAuthMiddleware } from "better-auth/api";
import consola from "consola";
import { and, eq } from "drizzle-orm";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    autoSignInAfterVerification: true,
  },
  baseURL: config.get("Application.BaseURL"),
  secret: config.get("Application.AuthSecret"),
  database: drizzleAdapter(nordic.db, {
    provider: "mysql",
    schema: schema,
  }),
  hooks: {
    after: createAuthMiddleware(async ({ context }) => {
      if (context.newSession) {
        const { user } = context.newSession;
        consola.info("Checking out athena user");
        const [exists] = await athena.db
          .select()
          .from(athena.login)
          .where(
            and(
              eq(athena.login.email, user.email),
              eq(athena.login.userid, user.name),
            ),
          );
        if (!exists) {
          consola.info("User doesn't exist, creating new RO user");

          await athena.db
            .insert(athena.login)
            .values({ userid: user.name, email: user.email });
        } else {
          consola.info("User exists, nothing to do");
        }
      }
    }),
  },
  emailVerification: {
    sendOnSignUp: true,
    sendVerificationEmail: async ({ user, url }) => {
      consola.info("Sending verification email");
      sendMail(
        {
          from: `${config.get("Application.Email.FromName")} <${config.get("Application.Email.FromAddress")}>`,
          to: user.email,
          subject: "Verify your email address",
          text: `Click the link to verify your email: ${url}`,
        },
        (error, info) => {
          if (error) {
            return consola.error(error);
          }
          return consola.info("Message sent", info.messageId);
        },
      );
    },
  },
});
