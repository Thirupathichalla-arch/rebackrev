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

// router.get("/", async (req, res) => {
//   const products = await Product.find().lean().exec();

//       const page=+(req.query.page) ||1;
//         const size=+(req.query.size) ||2;


//         const offset=(page-1)*size;


//         const product=await Product.find().skip(offset).limit(size).lean().exec();
//         const total=Math.ceil(await (Product.find().countDocuments())/size);

//          return res.status(201).json({product,total});



//   //return res.send(products);
// });
router.get("/", async(req, res) => {
  try {

    const product = await Product.find().populate().exec();

    return res.status(201).json({ product });
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

module.exports = router;
