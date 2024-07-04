const path = require("path");
const { createTransport } = require("nodemailer");
const mustacheExpress = require("mustache-express");

// This is where to import email templates
class EmailService {
  constructor() {
    const options = {
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT, 10),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    };
    this.fromName = process.env.SMTP_FROM_NAME;
    this.fromEmail = process.env.SMTP_FROM_EMAIL;
    this.transporter = createTransport(options);

    this.templateEngine = mustacheExpress(
      path.resolve(__dirname, "../emails"),
      ".html",
    );
  }

  async sendForgotPasswordEmail(props) {
    try {
      const template = await this.getTemplate("ForgotPassword", props);

      const options = {
        from: `${this.fromName} <${this.fromEmail}>`,
        to: props.email,
        subject: "Password Reset",
        html: template,
      };
      await this.transporter.sendMail(options);
    } catch (e) {
      console.error("========================error", e);
    }
  }

  async getTemplate(templateName, options) {
    const templatePath = path.resolve(
      __dirname,
      `../emailTemplates/${templateName}.html`,
    );
    return Promise.resolve().then(() => {
      return new Promise((resolve, reject) => {
        this.templateEngine(templatePath, options, (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      }).then((data) => {
        return data;
      });
    });
  }

  static getInstance() {
    if (!EmailService._instance) {
      EmailService._instance = new EmailService();
    }
    return EmailService._instance;
  }
}

module.exports = EmailService.getInstance();
