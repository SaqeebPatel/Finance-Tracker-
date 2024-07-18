const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const registerSchema = mongoose.Schema({
  Username: {
    type: String,
    require: false,
  },
  email: {
    type: String,
    require: false,
  },
  password: {
    type: String,
    require: false,
  },
});

registerSchema.pre("save", async function (next) {
  const u = this;
  if (u.isModified("password")) {
    u.password = await bcrypt.hash(u.password, 10);
  }
  next();
});

registerSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("registerdata", registerSchema);
