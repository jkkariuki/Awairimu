const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const AdminUser = require("../../models/AdminUser");
const Lead = require("../../models/Lead");

//@route  Post api/leads
//@desc   Test route
//@access Public
router.post(
  "/",
  [
    check("firstName", "First Name is required")
      .not()
      .isEmpty(),
    check("lastName", "Last Name is required")
      .not()
      .isEmpty(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
    check("email", "Please include a valid email").isEmail()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, email, password } = req.body;
    console.log(firstName);
    console.log(email);

    try {
      let lead = await Lead.findOne({ email });

      let adminUser = await AdminUser.findOne({ email: "akariuki@mail.com" });

      if (lead) {
        return res
          .status(400)
          .json({ errors: [{ msg: "That email is already in use. " }] });
      }

      lead = new Lead({
        // adminUser: adminUser.id,
        firstName,
        lastName,
        email,
        password
      });

      //Encrypt password
      const salt = await bcrypt.genSalt(10);
      lead.password = await bcrypt.hash(password, salt);
      await lead.save();
      await adminUser.save();

      const payload = {
        user: {
          id: lead.id
        }
      };

      adminUser.leads.unshift(lead);
      await adminUser.save();

      //Return jsonwebtoken

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          console.log({ token });

          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
