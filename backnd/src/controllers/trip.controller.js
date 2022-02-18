const express = require("express");

const Trip = require("../models/trip.model");

const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.post("/", async(req, res) => {
  try {
    //const user = req.user;

    const trip = await Trip.create({
      from: req.body.from,
      to: req.body.to,
      products: req.body.products,
    });

    return res.status(201).json({ trip });
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

router.get("/:id", async (req, res) => {
  const products = await Trip.find().lean().exec();

  return res.send(products);
});

module.exports = router;