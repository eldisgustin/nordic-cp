import nodemailer from "nodemailer";
import { config } from "~/config";

const transporter = nodemailer.createTransport({
  host: config.get("Application.Email.SMTPHost"),
  port: config.get("Application.Email.SMTPPort"),
  auth: {
    user: config.get("Application.Email.SMTPUser"),
    pass: config.get("Application.Email.SMTPPassword"),
  },
});

export const sendMail = transporter.sendMail.bind(transporter);
