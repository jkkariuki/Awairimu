// const config = require("config");
const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: process.env.API_KEY,
    domain: process.env.DOMAIN
  }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, text, subject, cb) => {
  const mailOptions = {
    from: email,
    to: "ajkariuki589@gmail.com",
    subject,
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
