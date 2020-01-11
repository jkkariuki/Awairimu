const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const AdminProfile = require("../../models/AdminProfile");
const AdminUser = require("../../models/AdminUser");
const { check, validationResult } = require("express-validator/check");

//@route  GET api/adminProfile
//@desc   Get Current adminUser
//@access Private
router.get("/admin", auth, async (req, res) => {
  try {
    console.log(req.admin.id);
    const adminUser = await AdminUser.findById(req.admin.id);

    res.json(adminUser);

    if (!adminUser) {
      return res.status(400).json({ msg: "Admin not found" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route  Post api/adminProfile/
//@desc   add or update a review
//@access Private

router.post(
  "/review",
  [
    auth,
    [
      check("text", "Review Text is required")
        .not()
        .isEmpty(),
      check("name", "Name required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const adminUser = await AdminUser.findById(req.admin.id).select(
      "-password"
    );

    try {
      const newReview = {
        text: req.body.text,
        name: req.body.name,
        year: req.body.year
      };

      adminUser.reviews.unshift(newReview);
      await adminUser.save();
      console.log(adminUser.reviews);
      res.json(adminUser);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//@route  Post api/adminProfile/
//@desc   create or update listing
//@access Private

router.post(
  "/listing",
  [
    auth,
    [
      check("saleRent", "Sale or Rental is required")
        .not()
        .isEmpty(),
      check("price", "Price required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { saleRent, price, beds, baths, sqft, city, imgs, link } = req.body;

    const listingFields = {};
    if (saleRent) listingFields.saleRent = saleRent;
    if (price) listingFields.price = price;
    if (beds) listingFields.beds = beds;
    if (baths) listingFields.baths = baths;
    if (sqft) listingFields.sqft = sqft;
    if (city) listingFields.city = city;
    if (imgs) listingFields.imgs = imgs;
    if (link) listingFields.link = link;

    try {
      let adminUser = await AdminUser.findById(req.admin.id);

      adminUser.listings.unshift(listingFields);
      await adminUser.save();
      console.log(adminUser.listings);

      res.json(adminUser);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//@route  GET api/adminProfile
//@desc   Delete an admin review
//@access Private
router.delete("/review/:id", auth, async (req, res) => {
  try {
    const adminUser = await AdminUser.findById({
      _id: req.admin.id,
      reviews: { _id: req.params.id }
    });

    if (!adminUser) {
      return res.status(404).json({ msg: "Review not found" });
    }

    await adminUser.reviews.id(req.params.id).remove();
    adminUser.save();
    res.json({ msg: "Review Removed" });

    console.log(adminUser.reviews.id(req.params.id));
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route  GET api/adminProfile
//@desc   Delete an admin listing
//@access Private
router.delete("/listing/:id", auth, async (req, res) => {
  try {
    const adminUser = await AdminUser.findById({
      _id: req.admin.id,
      listings: { _id: req.params.id }
    });

    if (!adminUser) {
      return res.status(404).json({ msg: "Review not found" });
    }

    await adminUser.listings.id(req.params.id).remove();
    adminUser.save();
    res.json({ msg: "Listing Removed" });

    console.log(adminUser.listings.id(req.params.id));
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route  GET api/adminProfile
//@desc   Delete an admin lead
//@access Private
router.delete("/lead/:id", auth, async (req, res) => {
  try {
    const adminUser = await AdminUser.findById({
      _id: req.admin.id,
      leads: { _id: req.params.id }
    });

    if (!adminUser) {
      return res.status(404).json({ msg: "Lead not found" });
    }

    await adminUser.leads.id(req.params.id).remove();
    adminUser.save();
    res.json({ msg: "Lead Removed" });

    console.log(adminUser.leads.id(req.params.id));
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
