const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const auth = require("../../middleware/auth");
const AdminUser = require("../../models/AdminUser");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator/check");

//@route  GET api/auth
//@desc   Check for logged in Admin route
//@access Private
router.get("/", auth, async (req, res) => {
  try {
    const adminUser = await AdminUser.findById(req.admin.id).select(
      "-password"
    );
    res.json(adminUser);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route  POST api/auth
//@desc   Authenticate adminUsers & get token
//@access Public
router.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let adminUser = await AdminUser.findOne({ email });

      if (!adminUser) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      const isMatch = await bcrypt.compare(password, adminUser.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }
      //Return jsonwebtoken

      const payload = {
        user: {
          id: adminUser.id
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
