const express = require("express");
const request = require("request");
const { check, validationResult } = require("express-validator/check");

const config = require("config");
const router = express.Router();
const auth = require("../../middleware/auth");

const Lead = require("../../models/Lead");
const AdminUser = require("../../models/AdminUser");

router.get("/my-profile", auth, async (req, res) => {
  try {
    const user = await Lead.findOne({
      _id: req.user.id
    }).select("-password");
    if (!user) {
      return res
        .status(400)
        .json({ msg: "There is no  profile for this user" });
    }

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/favorites", auth, async (req, res) => {
  console.log("HELLO THERE", req.body.privateRemarks);

  const newFave = {
    mlsId: req.body.mlsId,
    address: req.body.address.full,
    city: req.body.address.city,
    state: req.body.address.state,
    listingPrice: req.body.listPrice,
    bdrms: req.body.property.bedrooms,
    baths: req.body.property.bathsFull,
    privateRemarks: req.body.privateRemarks,
    img: req.body.photos[0]
  };

  try {
    const user = await Lead.findOne({
      _id: req.user.id
    }).select("-password");
    if (
      user.favorites.filter(favorite => favorite.mlsId === newFave.mlsId)
        .length > 0
    ) {
      return res.status(400).json({ msg: "Hey! You've saved this already." });
    }

    user.favorites.push(newFave);

    await user.save();

    if (!user) {
      return res
        .status(400)
        .json({ msg: "There is no  profile for this user" });
    }

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route    PUT api/profile/unfave/:id
//@desc     unfave a listing
//@access   Private
router.put("/unfave/:id", auth, async (req, res) => {
  console.log("ID HERE TOO: " + req.params.id);

  try {
    const user = await Lead.findOne({
      _id: req.user.id
    }).select("-password");

    //Check if the post has been liked by the user.

    if (
      user.favorites.filter(favorite => favorite.mlsId === req.params.id)
        .length < 0
    ) {
      return res.status(400).json({ msg: "Listing has not been favorited" });
    }

    //Get remove index
    const removeIndex = user.favorites
      .map(favorite => favorite.mlsId)
      .indexOf(req.params.id);

    user.favorites.splice(removeIndex, 1);

    await user.save();

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route    Post api/simplyRets/message/:id
//@desc     Message about a listing
//@access   Private
router.post(
  "/message/",
  [
    auth,
    [
      check("name", "Please enter your name"),
      check("phone", "Plese enter your phone#"),
      check("msg", "Message cannot be blank")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    //console.log("REQUEST " + JSON.stringify(req.user.id));
    const errors = validationResult(req.body.formData);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await Lead.findOne({
        _id: req.user.id
      }).select("-password");

      let adminUser = await AdminUser.findOne({ email: "akariuki@mail.com" });

      const newMessage = {
        userId: user._id,
        name: user.firstName + user.lastName,
        email: user.email,
        phone: JSON.stringify(req.body.formData.phone),
        msg: JSON.stringify(req.body.formData.msg),
        listing: JSON.stringify(req.body.listing)
      };

      adminUser.messages.unshift(newMessage);

      await adminUser.save();
      await user.save();

      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
