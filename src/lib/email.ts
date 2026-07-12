import nodemailer from "nodemailer";
import { config } from "~/config";

const transporter = nodemailer.createTransport({
  host: config.get("Application.MaiLSMTPHost"),
  port: config.get("Application.MailSMTPPort"),
  auth: {
    user: config.get("Application.MailSMTPUser"),
    pass: config.get("Application.MailSMTPPassword"),
  },
});

export const sendMail = transporter.sendMail.bind(transporter);
