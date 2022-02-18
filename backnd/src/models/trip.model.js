const { Schema, model } = require("mongoose");

const tripSchema = new Schema(
  {
    //Vehicles - Type (Bus/Van/Car), Registration No, Capacity 
    from: { type: String, required: true },
    to: { type: String, required: true },
    products: {
      type: Schema.Types.ObjectId,
      ref: "products",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
module.exports = model("trip", tripSchema);