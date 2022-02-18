const express = require("express");

const Product = require("../models/post.model");

const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.post("/", authenticate, async(req, res) => {
  try {
    const user = req.user;

    const product = await Product.create({
      vehicles: req.body.vehicles,
      registration: req.body.registration,
      capacity:req.body.capacity,
      user: user.user._id,
    });

    return res.status(201).json({ product });
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

router.get("/", async (req, res) => {
  const products = await Product.find().lean().exec();

  return res.send(products);
});

module.exports = router;
