const mongoose = require("mongoose");
const defaultConfig = {
  type: String,
  required: true,
  trim: true,
};
const userSchema = mongoose.Schema(
  {
    username: defaultConfig,
    email: { ...defaultConfig, unique: true },
    password: defaultConfig,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
