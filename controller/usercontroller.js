const mongoose = require("mongoose");
const registermodule = require("../model/user");
const jwt = require("jsonwebtoken");

// User added
async function addregister(req, res) {
  console.log(req.body);
  try {
    const register = registermodule(req.body);
    await register.save();
    res.status(201).send({ register });
  } catch (error) {
    res.status(500).send(error);
  }
}

// User Login
async function login(req, res) {
  console.log(req.body);
  try {
    const { email, password } = req.body;
    const register = await registermodule.findOne({ email });
    if (!register || !(await register.comparePassword(password))) {
      return res.status(400).send({ error: "Invalid email or password" });
    }
    const token = jwt.sign({ _id: register._id }, "Key", {
      expiresIn: "1h",
    });
    res.status(200).send({ register, token });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
}

//  get all information for user
async function getallregister(req, res) {
  console.log(req.body);
  try {
    const register = await registermodule.find();
    return res.send(register);
  } catch (error) {
    return res.status(400).send(error);
  }
}
module.exports = {
  addregister,
  login,
  getallregister,
};
