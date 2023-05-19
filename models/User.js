const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: string, required: true, unique },
    password: { type: String, required: true },
    isAdmin: { default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
