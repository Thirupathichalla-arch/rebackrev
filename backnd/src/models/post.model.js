const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    //Vehicles - Type (Bus/Van/Car), Registration No, Capacity 
    vehicles: { type: String, required: true },
    registration: { type: Number, required: true },
    capacity:[{type:Number,required:true}],
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("product", productSchema);
