import { authClient } from "~/lib/auth/client";
import type { Languages } from "~/i18n/ui";
import { useTranslations } from "~/i18n/utils";

type SignupCardProps = {
  lang: Languages;
};

export function SignUp({ lang }: SignupCardProps) {
  const t = useTranslations(lang);

  async function signup(formData: FormData) {
    await authClient.signUp.email({
      name: formData.get("name")!.toString(),
      email: formData.get("email")!.toString(),
      password: formData.get("password")!.toString(),
      callbackURL: "/",
      fetchOptions: {
        onSuccess() {
          window.location.assign("/signup/verification");
        },
      },
    });
  }

  return (
    <>
      <button popoverTarget="signup-modal">{t("signup.cta")}</button>

      <div id="signup-modal" className="modal" popover="">
        <div className="modal-box">
          <form action={signup}>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">{t("signup.cta")}</legend>

              <label className="label">{t("signup.form.name")}</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder={t("signup.form.name")}
              />

              <label className="label">{t("signup.form.email")}</label>
              <input
                type="email"
                name="email"
                className="input w-full"
                placeholder={t("signup.form.email")}
              />

              <label className="label">{t("signup.form.password")}</label>
              <input
                type="password"
                name="password"
                className="input w-full"
                placeholder={t("signup.form.password")}
              />

              <button className="btn btn-neutral mt-4">
                {t("signup.form.submit_btn")}
              </button>
            </fieldset>
          </form>
        </div>
        <div className="modal-backdrop">
          <button popoverTarget="signup-modal" popoverTargetAction="hide" />
        </div>
      </div>
    </>
  );
}
