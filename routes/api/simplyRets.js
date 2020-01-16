const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const config = require("config");
const auth = require("../../middleware/auth");
const Lead = require("../../models/Lead");

const request = require("request");

//@route  GET api/trulia
//@desc   Get featured Listings from Trulia
//@access Public

router.get("/featuredListings", async (req, res) => {
  try {
    var options = await {
      method: "GET",
      port: "http://localhost:5000",
      url: "https://trulia.p.rapidapi.com/properties/list",
      qs: {
        sortType: "price",
        location: "NJ",
        city: "Jersey City",
        lat: "40.0583",
        state: "NJ",
        type: "city",
        sortAscending: "true",
        offset: "0",
        limit: "20",
        searchType: "for_sale",
        lng: "74.4057",
        id: "7850"
      },
      headers: {
        // "x-rapidapi-host": "trulia.p.rapidapi.com",
        // "x-rapidapi-key": "3a25ce53b1msh6f93fc2c6aafe61p13000fjsnf5b80b71475e",
        "content-type": "application/json",
        "user-agent": "node.js"
      }
    };

    request(options, (error, response, body) => {
      if (error) console.error;

      if (response.statusCode !== 200) {
        return res.status(400).json({ msg: "Error" });
      }
      res.json(JSON.parse(body));
    });
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});

//@route  POST api/trulia
//@desc   User searched Listings from Trulia
//@access Public
router.post(
  "/searchListings",
  [
    check("city", "Please choose a city?")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { city, propertyType, offerType } = req.body;

    console.log(city, propertyType, offerType);
    try {
      var options = await {
        method: "GET",
        port: "http://localhost:5000",
        url: "https://trulia.p.rapidapi.com/properties/list",
        qs: {
          sortType: "price",
          location: "NJ",
          city: city + "",
          lat: "40.0583",
          state: "NJ",
          type: "city",
          sortAscending: "true",
          offset: "0",
          limit: "20",
          searchType: offerType + "",
          lng: "74.4057",
          id: "7850"
        },
        headers: {
          "x-rapidapi-host": "trulia.p.rapidapi.com",
          // "x-rapidapi-key":
          // "3a25ce53b1msh6f93fc2c6aafe61p13000fjsnf5b80b71475e",
          "content-type": "application/json",
          "user-agent": "node.js"
        }
      };

      request(options, (error, response, body) => {
        if (error) console.error;

        if (response.statusCode !== 200) {
          return res.status(400).json({ msg: "Error" });
        }
        console.log(body);
        res.json(JSON.parse(body));
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
