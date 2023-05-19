const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    descriptions: { type: string, required: true, unique },
    img: { type: String, required: true },
    catagories: { type: String, required: true },
    size: { type: String, required: true },
    color: { type: String, required: true },
    prize: { type: String, required: true },
  },

  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
