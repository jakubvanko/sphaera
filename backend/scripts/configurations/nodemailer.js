const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.MAIL_PORT == 465, // true for 465, false for other ports
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    }
});

const sendMessage = async data => {
    const mailResult = await transporter.sendMail({
        from: process.env.MAIL_SENDER,
        ...data
    });
    if (mailResult.messageId === undefined) {
        const error = new Error("Mail error");
        error.status = 500;
        throw error;
    }
};

module.exports = sendMessage;
