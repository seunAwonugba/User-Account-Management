require("dotenv").config();
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const path = require("path");

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.MAIL_USER, // generated ethereal user
        pass: process.env.MAIL_PASS, // generated ethereal password
    },
});

// point to the template folder
const handlebarOptions = {
    viewEngine: {
        partialsDir: path.resolve("./views/"),
        defaultLayout: false,
    },
    viewPath: path.resolve("./views/"),
};

// use a template file with nodemailer
transporter.use("compile", hbs(handlebarOptions));

const sendConfirmEmail = async (to, subject, template, name, url) => {
    const mailOptions = {
        from: process.env.MAIL_USER,
        to: to,
        subject: subject,
        template: template,
        context: {
            name,
            url,
        },
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
};

module.exports = { sendConfirmEmail };
