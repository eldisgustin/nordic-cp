import { authClient } from "~/lib/auth/client";
import { useTranslations } from "~/i18n/utils";
import type { Languages } from "~/i18n/ui";
import consola from "consola";

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
    <>
      <button popoverTarget="signin-modal">{t("signin.cta")}</button>

      <div id="signin-modal" className="modal" popover="">
        <div className="modal-box">
          <form action={action}>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">{t("signin.cta")}</legend>

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
              <button className="btn btn-neutral mt-4">
                {t("signin.submit")}
              </button>
            </fieldset>
          </form>
        </div>
        <div className="modal-backdrop">
          <button
            popoverTarget="signin-modal"
            popoverTargetAction="hide"
          ></button>
        </div>
      </div>
    </>
  );
}
