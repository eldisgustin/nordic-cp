import nodemailer from "nodemailer";
import { config } from "~/config";

const transporter = nodemailer.createTransport({
  host: config.get("Email.SMTPHost"),
  port: config.get("Email.SMTPPort"),
  auth: {
    user: config.get("Email.SMTPUser"),
    pass: config.get("Email.SMTPPassword"),
  },
});

export const sendMail = transporter.sendMail.bind(transporter);
