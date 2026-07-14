import type { Languages } from "~/i18n/ui";
import { useTranslations } from "~/i18n/utils";
import { authClient } from "~/lib/auth/client";

type SignupCardProps = {
  lang: Languages;
};

export function SignIn({ lang }: SignupCardProps) {
  async function action(formData: FormData) {
    const { data } = await authClient.signIn.email({
      email: formData.get("email")!.toString(),
      password: formData.get("password")!.toString(),
      callbackURL: "/account",
    });

    if (data?.redirect) {
      window.location.assign(data.url!);
    }
  }
  const t = useTranslations(lang);

  return (
    <form action={action}>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">{t("signin.title")}</legend>

        <label className="label">{t("signin.form.email")}</label>
        <input
          name="email"
          type="email"
          className="input w-full"
          placeholder={t("signin.form.email")}
          required
        />

        <label className="label">{t("signin.form.password")}</label>
        <input
          name="password"
          type="password"
          className="input w-full"
          placeholder={t("signin.form.password")}
          required
        />
        <button className="btn btn-neutral mt-4">{t("signin.submit")}</button>
      </fieldset>
    </form>
  );
}
