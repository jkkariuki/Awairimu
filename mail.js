const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: process.env.API_KEY || "MAIL_GUN_API_KEY", // TODO: Replace with your mailgun API KEY
    domain: process.env.DOMAIN || "MAIL_GUN_DOMAIN" // TODO: Replace with your mailgun DOMAIN
  }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, text, cb) => {
  const mailOptions = {
    from: email, // TODO replace this with your own email
    to: "ajkariuki589@gmail.com", // TODO: the receiver email has to be authorized for the free tier

    text
  };

  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      return cb(err, null);
    }
    return cb(null, data);
  });
};

module.exports = sendMail;
