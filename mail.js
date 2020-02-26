const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: "6027c18391c71b347ed05694a196dcf4-9dda225e-c068364b",
    domain: "sandbox2f2d94275a27469bb9d811d732674779.mailgun.org"
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
