const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const config = require("config");
const auth = require("../../middleware/auth");
const Lead = require("../../models/Lead");
const request = require("request");

//@route  GET api/simplyRets
//@desc   Get Listing by mlsId from simplyRets
//@access Public

router.get("/listing/:id", async (req, res) => {
  try {
    console.log(req.params.id);

    const options = await {
      method: "GET",
      port: "http://localhost:5000",

      url: `https://api.simplyrets.com/properties/${req.params.id}`,
      auth: {
        username: "simplyrets",
        password: "simplyrets"
      }
    };

    request(options, (error, response, body) => {
      if (error) console.log(error);

      if (response.statusCode !== 200) {
        return res.status(400).json({ msg: "No Github profile found" });
      }
      // console.log(JSON.parse(body));
      res.json(JSON.parse(body));
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route  POST api/simplyRets
//@desc   search Listings by city and offer type(sale or rental) from simplyRets
//@access Public

router.post("/search", async (req, res) => {
  try {
    console.log(req.body);

    const options = await {
      method: "GET",
      port: "http://localhost:5000",

      url: `https://api.simplyrets.com/properties?q=${req.body.city}&type=${req.body.offerType}&limit=500&idx=null&count=true`,
      auth: {
        username: "simplyrets",
        password: "simplyrets"
      }
    };

    request(options, (error, response, body) => {
      if (error) console.log(error);

      if (response.statusCode !== 200) {
        return res.status(400).json({ msg: "No Github profile found" });
      }
      res.json(JSON.parse(body));
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route  POST api/simplyRets
//@desc   load all Listings from simplyRets
//@access Public
router.post("/listings", async (req, res) => {
  try {
    const options = await {
      method: "GET",
      // port: "http://localhost:5000",

      url: `https://api.simplyrets.com/properties?limit=500&idx=null&count=true`,
      auth: {
        username: "simplyrets",
        password: "simplyrets"
      }
    };

    request(options, (error, response, body) => {
      if (error) console.log(error);

      if (response.statusCode !== 200) {
        return res.status(400).json({ msg: "No Github profile found" });
      }
      res.json(JSON.parse(body));
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
