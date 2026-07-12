import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { config } from "~/config";
import { db, schema } from "~/db/nordic";
import { sendMail } from "~/lib/email";
import consola from "consola";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    autoSignInAfterVerification: true,
  },
  baseURL: config.get("Application.BaseURL"),
  secret: config.get("Application.AuthSecret"),
  database: drizzleAdapter(db, {
    provider: "mysql",
    schema: schema,
  }),
  emailVerification: {
    sendOnSignUp: true,
    sendVerificationEmail: async ({ user, url }) => {
      consola.info("Sending verification email");
      sendMail(
        {
          from: `${config.get("Application.MailFromName")} <${config.get("Application.MailFromAddress")}>`,
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
