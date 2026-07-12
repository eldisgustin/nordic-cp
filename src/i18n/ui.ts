export const languages = {
  en: "English",
};

export const defaultLang = "en";

export const ui = {
  en: {
    "etc.online.true": "Online",
    "etc.online.false": "Offline",

    "navbar.home": "Home",
    "navbar.info": "Info",
    "navbar.forums": "Forums",
    "navbar.download": "Download",
    "navbar.donate": "Donate",
    "navbar.itemdb": "ItemDB",
    "navbar.mobdb": "MobDB",
    "navbar.account": "My account",

    "module.statistics.players.online_now": "Online Now",
    "module.statistics.players.total_accounts": "Total Accounts",
    "module.status.login_server": "Login",
    "module.status.char_server": "Char",
    "module.status.map_server": "Map",

    "signin.cta": "Sign in",
    "signin.form.email": "Email",
    "signin.form.password": "Password",
    "signin.submit": "Sign in",
    "signup.form.email": "Email",
    "signup.form.password": "Password",
    "signup.form.name": "Name",
    "signup.form.submit_btn": "Sign up",
    "signup.cta": "Sign up",

    "account.title": "Account",
    "account.view": "View Account",
    "account.signin": "Sign In",
    "account.signout": "Sign Out",
    "account.details.title": "Details",
    "account.details.username": "Username",
    "account.details.email": "Email",
    "account.details.login_count": "Login count",
    "account.details.state": "State",
    "account.details.account_id": "Account ID",
    "account.details.group_id": "Group ID",
    "account.details.birthdate": "Birthdate",
    "account.details.last_login": "Last login",
    "account.details.last_ip": "Last IP",
    "account.characters.title": "Characters",
    "account.characters.total_zeny": "Total Zeny:",
    "account.characters.table_header.slot": "Slot",
    "account.characters.table_header.name": "Character Name",
    "account.characters.table_header.job": "Job Class",
    "account.characters.table_header.base_level": "Base Level",
    "account.characters.table_header.job_level": "Job Level",
    "account.characters.table_header.zeny": "Zeny",
    "account.characters.table_header.guild": "Guild",
    "account.characters.table_header.status": "Status",

    "pages.new.title": "New Page",
    "pages.new.form.title": "Title",
    "pages.new.form.path": "Handle",
    "pages.new.form.body": "Content",
    "pages.new.form.submit": "Save",
  },
} as const;

export type Languages = keyof typeof ui;
