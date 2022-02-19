const express = require("express");

const { register, login } = require("./controllers/auth.controller");
const productController = require("./controllers/post.controller");
const tripController = require("./controllers/trip.controller");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// app.use("/users", userController) // /register /login
app.post("/register", register);
app.post("/login", login);

app.use("/products", productController);
app.use("/trips", tripController);

module.exports = app;
