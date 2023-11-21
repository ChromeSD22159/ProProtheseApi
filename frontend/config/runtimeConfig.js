import { strapi_url } from "./strapi";
export const runtimeConfig = {
  MAILHOST: process.env.EMAIL_SMTP_HOST,
  MAILPORT: process.env.EMAIL_SMTP_PORT,
  MAILUSER: process.env.EMAIL_SMTP_USER,
  MAILPASS: process.env.EMAIL_SMTP_PASS,
  CONTACTMAIL: process.env.EMAIL_ADDRESS_FROM,
  public: {
    strapi: strapi_url,
  }
};