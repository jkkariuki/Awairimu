const config = require("config");
const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: config.get("REACT_APP_API_KEY"),
    domain: config.get("REACT_APP_DOMAIN")
  }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, text, subject, cb) => {
  const mailOptions = {
    from: email, // TODO replace this with your own email
    to: "ajkariuki589@gmail.com", // TODO: the receiver email has to be authorized for the free tier
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
